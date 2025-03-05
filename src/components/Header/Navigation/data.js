const navigationItems = [
  {
    value: "Heroes",
    path: "/heroes",
    iconLeft: "heroes",
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
    path: "/players",
    iconLeft: "players",
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
    path: "/matches",
    iconLeft: "matches",
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
    path: "/leagues",
    iconLeft: "leagues",
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

export { navigationItems };
