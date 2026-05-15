import assert from 'node:assert/strict';

const html = await fetch('http://127.0.0.1:4321/').then((res) => res.text());

assert(!html.includes('href="/projects"><a '), '典型场景案例卡片内仍存在嵌套链接');

console.log('case card nesting check passed');
