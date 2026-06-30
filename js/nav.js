/**
 * IW 网站 — 导航栏组件
 * 依赖：js/config.js（需先加载，提供 SITE 和 NAV_ITEMS）
 */

const SiteNav = {
  props: { active: { type: String, default: 'home' } },

  template: `
  <nav class="navbar navbar-expand-lg fixed-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" :href="items[0].href">
        <i class="bi bi-code-slash me-2"></i>{{ site.name }}
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="item in items" :key="item.id">
            <a class="nav-link" :class="{ active: active === item.id }"
               :href="item.href">
              <i :class="'bi bi-' + item.icon + ' me-1'"></i>{{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `,

  data() {
    return { site: SITE, items: NAV_ITEMS }
  },
}
