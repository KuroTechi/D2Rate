const CarryRoleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" height="18" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.792 16.244L.623 20.388a2.107 2.107 0 000 2.992h.002a2.136 2.136 0 003.01 0l4.167-4.142-3.01-2.994z"
      fill="url(#hilt_:rf:_dark)"
      fillOpacity="0.7"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.853 10.193c-.373.32-.597.78-.615 1.268-.018.49.17.964.517 1.309l8.53 8.478c.326.327.77.507 1.233.507a1.73 1.73 0 001.228-.51 1.717 1.717 0 00-.003-2.434c-.86-.855-1.857-1.843-1.857-1.843s8.881-7.06 10.836-8.612a1.18 1.18 0 00.43-.776c.17-1.423.668-5.646.845-7.124a.406.406 0 00-.119-.337.414.414 0 00-.34-.116l-6.767.843c-.304.038-.578.19-.77.427L7.134 12.245s-1.087-1.085-1.973-1.962a1.702 1.702 0 00-2.305-.09h-.003zm7.519 4.69l9.922-9.861a.79.79 0 10-1.124-1.116l-9.922 9.863a.782.782 0 000 1.114c.31.31.813.31 1.124 0z"
      fill="url(#blade_:rf:_dark)"
    ></path>
    <defs>
      <linearGradient
        id="hilt_:rf:_dark"
        x1="3"
        y1="18"
        x2="6"
        y2="21.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DDD"></stop>
        <stop offset="1" stopColor="#838383"></stop>
      </linearGradient>
      <linearGradient
        id="blade_:rf:_dark"
        x1="23.915"
        y1="9.91042e-8"
        x2="6.38719"
        y2="17.6213"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="hsl(231,54%,59%)"></stop>
        <stop offset="1" stopColor="hsl(230,43%,45%)"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default CarryRoleIcon;
