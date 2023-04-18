export default fullMount = {
  text: 'Side Control',
  link: 'side-control/',
  collapsed: true,
  items: [
    {
      text: 'Bottom',
      link: 'side-control/bottom/',
      collapsed: true,
      items: [
        {
          text: 'Escapes',
          link: 'side-control/bottom/escapes',
        },
        {
          text: 'Submissions',
          link: 'side-control/bottom/submissions',
        },
      ],
    },

    {
      text: 'Top',
      link: 'side-control/top/',
      collapsed: true,
      items: [
        {
          text: 'Retention',
          link: 'side-control/top/retention',
        },
        {
          text: 'Submissions',
          link: 'side-control/top/submissions',
        },
        {
          text: 'Transitions',
          link: 'side-control/top/transitions',
        },
      ],
    },
  ],
}
