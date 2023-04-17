export default fullMount = {
  text: 'Closed Guard',
  link: 'closed-guard/',
  collapsed: true,
  items: [
    {
      text: 'Bottom',
      link: 'closed-guard/bottom/',
      collapsed: true,
      items: [
        {
          text: 'Retention',
          link: 'closed-guard/bottom/retention',
        },
        {
          text: 'Submissions',
          link: 'closed-guard/bottom/submissions',
        },
        {
          text: 'Sweeps',
          link: 'closed-guard/bottom/sweeps',
        },
      ],
    },

    {
      text: 'Top',
      link: 'closed-guard/top/',
      collapsed: true,
      items: [
        {
          text: 'Escapes',
          link: 'closed-guard/top/escapes',
        },
        {
          text: 'Passing',
          link: 'closed-guard/top/passing',
        },
        {
          text: 'Submissions',
          link: 'closed-guard/top/submissions',
        },
      ],
    },
  ],
}
