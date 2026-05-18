# 联系页成功态内联二维码与客户反馈头像刷新设计

## Context
当前联系页提交成功后会通过 `HSOverlay` 打开全屏模态，导致页面整体变暗，用户反馈体验像“蒙了一层阴影”。目标是把成功态改成表单原位切换显示二维码卡片，避免全屏遮罩。同时，客户反馈区的三张头像与站内其他图片重复，需要替换为新的网络素材。Cloudflare 与 HTTPS 已在源站完成，剩余收尾是确认橙云代理与 `Full (strict)` 状态。

## Decision
### 1. 联系页成功态
- 保留现有 `/api/contact` 提交流程与返回 JSON 结构。
- 删除 `InquiryForm.astro` 中的全屏 `HSOverlay` 成功模态结构与打开逻辑。
- 在表单组件内部新增“成功态”分支：提交成功后隐藏表单字段，原位展示标题、说明文案、微信二维码和一个返回/重新提交入口（如需要）。
- 保持页面其他区域完全可见，不加全屏遮罩。

### 2. 客户反馈头像
- 仅替换 `src/pages/projects/index.astro` 当前 testimonials 使用的三张头像图片。
- 保持 testimonials 文案、作者、角色和组件结构不变。
- 新头像文件继续放在 `src/images/pages/projects/`，沿用当前语义命名位置，不扩展到其他页面图片。

### 3. Cloudflare 收尾
- 代码改动完成并重新部署后，继续检查：
  - `https://bq-star.com`
  - `https://www.bq-star.com` 到 apex 的跳转
  - `POST /api/contact`
- 如果服务器侧检查均正常，但 Cloudflare 代理仍需控制台点击，则明确告诉用户只需在 Cloudflare DNS 中把 `@` 和 `www` 切成橙云，并确认 SSL/TLS 模式为 `Full (strict)`。

## Files
- Modify: `src/components/sections/misc/InquiryForm.astro`
- Modify: `src/pages/projects/index.astro`
- Update assets under: `src/images/pages/projects/`

## Verification
1. 本地/工作区验证
- 提交联系表单后，表单区域原位显示二维码卡片，不出现全屏遮罩。
- 构建通过。

2. 线上验证
- `https://bq-star.com/contact` 提交成功后显示原位二维码。
- 客户反馈区三张头像已替换且无重复。
- `https://bq-star.com` 正常；`https://www.bq-star.com` 跳转正确；contact API 返回成功。

## Scope Guardrails
- 不改 `/api/contact` 返回协议。
- 不重构 testimonials 组件。
- 不扩大到其他页面图片清理。
- 不在没有必要的情况下新增新的全局脚本或状态管理。