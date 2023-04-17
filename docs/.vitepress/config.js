import { defineConfig } from 'vitepress'
import {
  openGuard,
  closedGuard,
  kneeOnBelly,
  fullMount,
} from './paths/index.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Free BJJ',
  description: 'Collection of free BJJ resources',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },

      openGuard,
      closedGuard,
      kneeOnBelly,
      fullMount,
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
