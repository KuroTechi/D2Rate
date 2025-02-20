const navigationItems = [
  {
    value: "Heroes",
    iconLeft: "heroes",
    iconRight: "arrowDown",
    submenu: [
      {
        text: "Review",
        link: "#overwiev1",
      },
      {
        text: "Meta",
        link: "#overwiev2",
      },
      {
        text: "Guides",
        link: "#overwiev3",
      },
    ],
  },
  {
    value: "Players",
    iconLeft: "players",
    iconRight: "arrowDown",
    submenu: [
      {
        text: "Ranks",
        link: "#overwiev1",
      },
      {
        text: "Queue",
        link: "#overwiev2",
      },
      {
        text: "Highlights",
        link: "#overwiev3",
      },
      {
        text: "Leaderboards",
        link: "#overwiev4",
      },
    ],
  },
  {
    value: "Matches",
    iconLeft: "matches",
    iconRight: "arrowDown",
    submenu: [
      {
        text: "Live",
        link: "#overwiev1",
      },
      {
        text: "Graphs",
        link: "#overwiev2",
      },
    ],
  },
  {
    value: "Leagues",
    iconLeft: "leagues",
    iconRight: "arrowDown",
    submenu: [
      {
        text: "The International",
        link: "#overwiev3",
      },
      {
        text: "Dota Pro Circuit",
        link: "#overwiev4",
      },
      {
        text: "Professional",
        link: "#overwiev5",
      },
      {
        text: "Amateur",
        link: "#overwiev6",
      },
    ],
  },
];

const media = {
  tablet: "(max-width:1140.98px)",
};

export { navigationItems, media };
