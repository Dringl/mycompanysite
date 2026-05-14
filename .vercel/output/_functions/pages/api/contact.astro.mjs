export { renderers } from '../../renderers.mjs';

const jsonHeaders = {
  "Content-Type": "application/json"
};
const requiredFields = [
  "name",
  "company",
  "contact",
  "inquiryType",
  "details"
];
const prerender = false;
const POST = async ({ request }) => {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ ok: false, message: "请求体必须为 JSON。" }),
      { status: 400, headers: jsonHeaders }
    );
  }
  for (const key of requiredFields) {
    const value = payload[key];
    if (!value || String(value).trim().length === 0) {
      return new Response(
        JSON.stringify({ ok: false, message: `缺少字段：${key}` }),
        { status: 400, headers: jsonHeaders }
      );
    }
  }
  {
    return new Response(
      JSON.stringify({ ok: false, message: "未配置 CONTACT_WEBHOOK_URL。" }),
      { status: 503, headers: jsonHeaders }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
