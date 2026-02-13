// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function () {
  // 1. 隐藏所有 Giscus 元素（兜底）
  const giscusElements = document.querySelectorAll('.giscus, #giscus_thread, iframe[src*="giscus"]');
  giscusElements.forEach(el => {
    el.style.display = 'none';
    el.style.visibility = 'hidden';
  });

  // 2. 创建 Waline 容器
  const walineContainer = document.createElement('div');
  walineContainer.id = 'waline';
  walineContainer.style.marginTop = '2rem';
  walineContainer.style.padding = '1rem';

  // 3. 把 Waline 放在页面主内容区后面
  const mainContent = document.querySelector('main') || document.body;
  mainContent.appendChild(walineContainer);

  // 4. 加载并初始化 Waline
  import('https://unpkg.com/@waline/client@v3/dist/waline.mjs').then(({ init }) => {
    init({
      el: '#waline',
      serverURL: 'https://waline-server-bay-two.vercel.app', // 替换成你的服务端地址
      dark: 'auto',
      locale: {
        placeholder: '欢迎在燕山旧时光留言～',
        nick: '昵称',
        mail: '邮箱（选填）',
        link: '网址（选填）',
        submit: '提交评论',
      },
    });
  });
});
