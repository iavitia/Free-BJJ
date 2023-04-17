export default fullMount = {
  text: 'Full Mount',
  link: 'full-mount/',
  collapsed: true,
  items: [
    {
      text: 'Bottom',
      link: 'full-mount/bottom/',
      collapsed: true,
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
      link: 'full-mount/top/',
      collapsed: true,
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
}
