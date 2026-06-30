/**
 * IW 网站 — 页脚组件
 * 依赖：js/config.js（需先加载，提供 SITE）
 */

const SiteFooter = {
  template: `
  <footer class="site-footer py-4 mt-5">
    <div class="container text-center">
      <p class="mb-1 text-muted">{{ site.schoolName }} — {{ site.name }}</p>
      <p class="mb-0 small text-muted">
        开发学生：<span v-for="(s, i) in site.students" :key="i">{{ s }}<span v-if="i < site.students.length - 1">、</span></span>
        &nbsp;|&nbsp; 指导老师：{{ site.advisor }}
      </p>
      <p class="mb-0 small text-muted mt-1">{{ site.logoHint }}</p>
    </div>
  </footer>
  `,

  data() {
    return { site: SITE }
  },
}
