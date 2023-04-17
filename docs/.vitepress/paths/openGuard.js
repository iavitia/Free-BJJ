export default fullMount = {
  text: 'Open Guard',
  link: 'open-guard/',
  collapsed: true,
  items: [
    {
      text: 'Bottom',
      link: 'open-guard/bottom/',
      collapsed: true,
      items: [
        {
          text: 'Retention',
          link: 'open-guard/bottom/retention',
        },
        {
          text: 'Submissions',
          link: 'open-guard/bottom/submissions',
        },
        {
          text: 'Sweeps',
          link: 'open-guard/bottom/sweeps',
        },
      ],
    },

    {
      text: 'Top',
      link: 'open-guard/top/',
      collapsed: true,
      items: [
        {
          text: 'Escapes',
          link: 'open-guard/top/escapes',
        },
        {
          text: 'Passing',
          link: 'open-guard/top/passing',
        },
        {
          text: 'Submissions',
          link: 'open-guard/top/submissions',
        },
      ],
    },
  ],
}
