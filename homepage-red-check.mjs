import assert from 'node:assert/strict';

const html = await fetch('http://127.0.0.1:4321/').then((res) => res.text());
const caseSectionStart = html.indexOf('典型场景案例');
const caseSectionEnd = html.indexOf('</section>', caseSectionStart);
const caseSectionHtml = html.slice(caseSectionStart, caseSectionEnd);
const nestedAnchorPattern = /<a\b[^>]*>(?:(?!<\/a>).)*<a\b/s;

assert(!html.includes('src="[object Object]"'), '重点解决方案图片区仍输出 [object Object]');
assert(!nestedAnchorPattern.test(caseSectionHtml), '典型场景案例卡片内仍存在嵌套链接');

console.log('homepage structure checks passed');
