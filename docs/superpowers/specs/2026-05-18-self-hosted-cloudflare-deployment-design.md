# 自托管部署与 Cloudflare 接入设计

## Context

当前站点 `/data/work/web/mycompanysite` 仍然基于 Astro SSR + `@astrojs/vercel` 运行，构建与部署链路明显绑定 Vercel：
- `astro.config.mjs` 使用 `adapter: vercel({ imageService: true })`
- `package.json` 的 `build` 依赖 `node process-html.mjs`
- `process-html.mjs` 硬编码处理 `./.vercel/output/static`
- `vercel.json` 承载生产安全头策略

用户现在明确要把站点部署到一台具备公网 IP、持续运行的 Ubuntu/Debian 云服务器上，并通过 Cloudflare 与 `bq-star.com` 域名对外提供服务，不再继续依赖 Vercel adapter。与此同时，当前线上还存在一个与部署形态直接相关的问题：联系表单在生产环境返回“未配置邮件通知或 webhook 链路”，根因是生产运行环境没有正式配置通知链路，而不是前端页面本身。

本次设计目标是：在不拆分前后端、不重构业务结构的前提下，把当前站点迁移为可在自有 Linux 服务器上长期稳定运行的 Astro Node 自托管方案，并把 Cloudflare、Nginx、HTTPS、systemd、联系表单正式配置一起纳入同一条可执行部署路径。

## Goal

将当前网站从 `@astrojs/vercel` 迁移为 `@astrojs/node` 自托管部署，运行在 Ubuntu/Debian 云服务器上，通过 Cloudflare 托管 `bq-star.com` 域名，并确保联系表单在正式生产环境下具备可持续、可迁移的邮件通知能力。

## Recommended Approach

采用以下分层架构：

- **入口层：Cloudflare**
  - 托管 `bq-star.com` 域名的 DNS
  - 为 `@` 和 `www` 建立记录
  - 默认开启橙云代理
  - SSL 模式使用 `Full (strict)`
- **边缘源站层：Nginx**
  - 监听 `80` / `443`
  - 强制 HTTP → HTTPS
  - 将 `www.bq-star.com` 301 跳转到 `bq-star.com`
  - 将业务请求反向代理到本机 Node 端口 `127.0.0.1:18743`
  - 承接原 `vercel.json` 中的安全头与缓存策略
- **应用层：Astro Node server**
  - 将 adapter 从 `@astrojs/vercel` 切换为 `@astrojs/node`
  - 保留 `output: "server"`
  - 继续承载当前页面 SSR 与 `/api/contact`
- **进程守护层：systemd**
  - 负责 Astro Node 服务开机自启、崩溃拉起、日志管理
- **通知层：Gmail API / 可选 webhook**
  - 生产环境依赖正式环境变量
  - Hermes 文件回退只保留本地开发使用，不作为生产运行前提

## Confirmed Constraints

- 目标服务器是**具备公网 IP 的 Ubuntu/Debian 云服务器**
- Cloudflare 目前**尚未接管该域名**，需要把迁移指导纳入方案
- 用户要求 Node 端口**不要使用默认常见端口**，采用本机回环地址上的高位端口，例如 `127.0.0.1:18743`
- 用户希望域名最终对外提供稳定的正式网站服务，而不是仅做临时预览

## Architecture

### 1. 流量路径

最终流量路径为：

`浏览器 → Cloudflare → Nginx :443 → 127.0.0.1:18743 → Astro Node 应用`

约束如下：
- Node 进程仅绑定 `127.0.0.1:18743`
- 公网不直接暴露 Node 端口
- 公网仅开放 `80` / `443` / `22`（或用户自定义 SSH 端口）
- 防火墙与云安全组都不放行 `18743`

### 2. 域名策略

- `bq-star.com` 作为主站域名
- `www.bq-star.com` 永久重定向到 `bq-star.com`
- Cloudflare 托管 DNS，并为根域和 `www` 建立记录
- 建议默认开启 Cloudflare 代理，后续再按资源类型优化缓存规则

### 3. HTTPS 策略

- Cloudflare 侧采用 `Full (strict)`
- 源站 Nginx 配置正式证书
- 不采用 `Flexible` 模式，避免 Cloudflare 到源站的明文 HTTP

## Codebase Changes

### 需要修改的关键文件

#### `astro.config.mjs`
- 移除 `@astrojs/vercel`
- 改为 `@astrojs/node`
- 保持 `output: "server"`
- 重新确认图片服务在 Node 方案下的兼容性

#### `package.json`
- 移除 Vercel 适配器依赖
- 增加适用于生产部署的启动脚本
- 把 `start` 从 `astro dev` 改为真正的生产启动命令
- 保留 `build`，但不再依赖 Vercel 专属输出目录

#### `process-html.mjs`
- 当前硬编码 `./.vercel/output/static`
- 需要改成面向 Node 构建产物的输出目录处理逻辑
- 这是从 Vercel 迁移到 Node 的首要兼容点

#### `vercel.json`
- 不再作为生产配置来源
- 其中安全头策略要迁移到 Nginx
- 文件可以保留为历史参考，也可以在迁移完成后清理

#### `README.md`
- 更新部署文档
- 新文档应以 Ubuntu/Debian + Node + Nginx + Cloudflare 为主线

#### `src/pages/api/contact.ts`
- 保留现有接口职责
- 生产环境逻辑必须以环境变量为正式配置来源
- Hermes 本地回退只保留给开发环境或本地测试

### 推荐迁移顺序

1. 切换 Astro adapter：`@astrojs/vercel` → `@astrojs/node`
2. 修正构建后处理：解决 `process-html.mjs` 对 `.vercel/output/static` 的硬编码依赖
3. 增加生产启动方式：明确 Node 自托管的运行脚本与监听端口
4. 迁移安全头：把 `vercel.json` 中的 header 策略搬到 Nginx
5. 做站点资源回归：图片、视频、favicon、manifest、OG 图、联系表单
6. 最后再切 Cloudflare 和 DNS

## Contact Form Production Design

### 当前问题

`src/pages/api/contact.ts` 当前支持两类配置来源：
- 正式环境变量
- 本机 `~/.hermes/google_token.json` 回退

这对本地调试有效，但不适合作为正式生产部署方案。当前线上返回“未配置邮件通知或 webhook 链路”的根因，就是生产环境没有正式提供 Gmail 或 webhook 配置。

### 正式生产方案

生产环境采用以下优先级：

1. **主链路：Gmail API 发送**
2. **备链路：可选 webhook 转发**
3. **Hermes 文件回退：仅限本地开发，不作为生产依赖**

### 必需环境变量

- `CONTACT_NOTIFICATION_EMAIL`
- `GOOGLE_WORKSPACE_CLIENT_ID`
- `GOOGLE_WORKSPACE_CLIENT_SECRET`
- `GOOGLE_WORKSPACE_REFRESH_TOKEN`
- `GOOGLE_WORKSPACE_SENDER_EMAIL`

### 可选环境变量

- `CONTACT_WEBHOOK_URL`

### 服务器落地方式

- 使用单独环境文件，例如 `/etc/bq-star.env`
- 由 systemd 服务通过 `EnvironmentFile` 载入
- 这样更换收件邮箱、refresh token 或 webhook 时，不需要改源码

### 生产验收要求

上线前必须验证：
- 联系表单可以正常提交
- 发件人显示仍为“补全星助手”
- 邮件可以发送到目标收件邮箱
- 页面不再出现“未配置邮件通知或 webhook 链路”
- 出错时日志中可以定位失败环节

## Cloudflare Design

### 迁移步骤

1. 在 Cloudflare 中添加 `bq-star.com`
2. 获取 Cloudflare 提供的 NS 记录
3. 到域名注册商处把原 NS 改为 Cloudflare NS
4. 在 Cloudflare 中配置：
   - `@` → 服务器公网 IP
   - `www` → 服务器公网 IP
5. 默认开启橙云代理
6. SSL/TLS 模式配置为 `Full (strict)`

### 切流顺序

1. 先让服务器本地 Node + Nginx 跑通
2. 先用本机验证或临时 hosts 验证源站
3. 再切 NS 到 Cloudflare
4. 再配置 DNS 和 SSL
5. 最后开启代理并做正式上线回归

## Nginx Design

Nginx 负责：
- 提供 `80` / `443` 入口
- HTTP 跳 HTTPS
- `www` 跳主域
- 反向代理到 `127.0.0.1:18743`
- 接管当前 `vercel.json` 的安全头策略

### 需迁移的安全头

来自当前 `vercel.json` 的核心策略包括：
- `Content-Security-Policy`
- `Permissions-Policy`
- `Referrer-Policy`
- `X-Content-Type-Options`
- `X-Frame-Options`
- `X-XSS-Protection`
- `Cache-Control`
- `Strict-Transport-Security`

### 资源缓存

Nginx 层要为以下资源设计更清晰的缓存策略：
- 图片
- 视频
- 字体
- favicon
- manifest

## Testing and Verification

### 代码层验证

迁移到 Node 方案后，至少需要重新验证：
- `npm run build`
- 生产启动命令
- `contact-regression.test.mjs`

### 需要新增/调整的回归测试

#### `contact-regression.test.mjs`
补充两类回归：
1. 当生产环境没有 Hermes 文件时，只要受控环境变量完整，联系表单仍然能够成功发送邮件
2. 联系页右侧第二张卡片“了解典型案例”在最终实现中不再依赖缺失或异常的图标定义，左侧与上下项保持同一套对齐约束

### 部署前页面回归

至少检查：
- `/`
- `/contact`
- `/about`
- `/services`
- `/solutions`
- `/projects`
- `/favicon.ico`
- `/manifest.json`
- `/videos/company-intro-h264.mp4`

### 重点资源验证

迁移 Node adapter 后，重点验证这些路径与链路：
- `public/` 直出资源
- `astro:assets` 生成图片
- `Meta.astro` 中 `getImage()` 生成的资源
- `src/pages/manifest.json.ts` 生成的图标路径
- 页面中的 OG 图与 Apple Touch Icon

### 服务器上线后验收

验收顺序：
1. 服务器本机验证 Node 服务
2. Nginx 反代验证
3. HTTPS 验证
4. Cloudflare 切流验证
5. 联系表单真机提交验证
6. 日志与错误回溯验证

## Operational Steps on the Server

正式实施时，服务器侧动作分为六组：

1. 安装运行环境
   - Node.js LTS
   - Nginx
   - certbot
2. 部署代码与依赖
   - 拉代码
   - 安装依赖
   - 构建
3. 配置环境变量
   - 邮件通知相关 env
   - 运行环境 env
4. 创建 systemd 服务
   - 开机自启
   - 异常自动重启
5. 配置 Nginx
   - 主域
   - `www` 跳转
   - 反代到 `127.0.0.1:18743`
   - 安全头
6. 接入 Cloudflare
   - 切 NS
   - 配置记录
   - 开启 `Full (strict)`
   - 完成上线回归

## Scope Boundaries

本次设计明确覆盖：
- Vercel → Astro Node 自托管迁移
- Ubuntu/Debian 源站部署
- Nginx 反向代理
- Cloudflare 域名接入
- HTTPS 策略
- 联系表单正式通知链路
- 当前线上联系表单故障的根因修复路径

本次设计明确不强制包含：
- Docker 化
- CI/CD 自动发布
- 多机高可用
- 数据库或后台线索管理系统
- Cloudflare 高级缓存规则精调

## Success Criteria

当以下条件全部满足时，本次部署设计视为达成目标：
- 项目可以不依赖 Vercel，在 Ubuntu/Debian 服务器上长期运行
- `bq-star.com` 与 `www.bq-star.com` 通过 Cloudflare 对外服务
- 主域名、HTTPS、重定向、反向代理都正常
- 联系表单在正式生产环境下可用，且不依赖 Hermes 本地文件
- 图片、视频、favicon、manifest 与 OG 资源在 Node 方案下正常工作
- 源站只暴露 Nginx，对外不暴露 Node 应用端口
