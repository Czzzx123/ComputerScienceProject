/**
 * IW 网站 — 全局配置
 * 使用方式：每个 HTML 页面最先加载本文件
 * 【任课老师改这里】：学校名、学生姓名、导航菜单
 */

// ---- 站点信息 ----
const SITE = {
  name: '网页名称',
  schoolName: '学校姓名',
  students: ['学生姓名1', '学生姓名2'],
  advisor: '老师姓名',
  logoHint: '此处预留学校 Logo 展示位置，支持后续替换',
}

// ---- 导航菜单 ----
const NAV_ITEMS = [
  { id: 'home',      label: '首页',       icon: 'bi-house-door',       href: 'index.html' },
  { id: 'about',     label: '关于我们',   icon: 'bi-people',           href: 'about.html' },
  { id: 'courses',   label: '课程介绍',   icon: 'bi-book',             href: 'courses.html' },
  { id: 'resources', label: '资料下载',   icon: 'bi-download',         href: 'resources.html' },
  { id: 'projects',  label: '实验代码',   icon: 'bi-code-square',      href: 'projects.html' },
  { id: 'tools-faq', label: '工具与答疑', icon: 'bi-question-circle',  href: 'tools-faq.html' },
]
