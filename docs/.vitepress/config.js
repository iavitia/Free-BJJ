import { defineConfig } from 'vitepress'

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
      {
        text: 'Full Mount',
        collapsed: false,
        items: [
          {
            text: 'Bottom',
            collapsed: false,
            link: 'full-mount/bottom/',
            items: [
              {
                text: 'Escapes',

                link: 'full-mount/bottom/escapes',
              },
              {
                text: 'Submissions',

                link: 'full-mount/bottom/submissions',
              },
            ],
          },
          {
            text: 'Top',
            collapsed: false,
            link: 'full-mount/top/',
            items: [
              {
                text: 'Retention',

                link: 'full-mount/top/retention',
              },
              {
                text: 'Submissions',

                link: 'full-mount/top/submissions',
              },
              {
                text: 'Transitions',

                link: 'full-mount/top/transitions',
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
