---
title: "燕山论坛"
type: "page"
layout: "single"
comments: true
---

欢迎来到燕山论坛！无论在哪里，我都爱燕山！
大家可以在这里自由发帖、交流、晒图。

---
## 💬 燕山论坛

<!-- 先加载 Artalk 核心文件，确保脚本可用 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/artalk@latest/dist/Artalk.css">
<script src="https://cdn.jsdelivr.net/npm/artalk@latest/dist/Artalk.js"></script>

<!-- 评论区容器（红框保留，确保可见） -->
<div id="artalk-final" style="
  display: block !important;
  visibility: visible !important;
  margin: 2rem auto;
  padding: 1.5rem;
  max-width: 800px;
  width: 90%;
  border: 2px solid #ff0000;
  background: #ffffff !important;
  color: #000000 !important;
"></div>

<!-- 终极版初始化：用 Artalk.init() 并加调试日志 -->
<script>
  console.log("开始初始化 Artalk...");
  if (typeof Artalk === 'undefined') {
    console.error("Artalk 脚本未加载！");
  } else {
    console.log("Artalk 已加载，开始初始化...");
    Artalk.init({
      el: '#artalk-final',
      server: 'https://artalk.artalkjs.org',
      site: '燕山旧时光',
      pageKey: window.location.href,
      darkMode: 'auto', // 适配你的深色主题
      locale: {
        nick: '昵称',
        email: '邮箱（选填）',
        submit: '提交评论',
        placeholder: '欢迎在燕山论坛留言～',
        empty: '暂无评论，快来抢沙发！'
      }
    });
    console.log("Artalk 初始化完成！");
  }
</script>
