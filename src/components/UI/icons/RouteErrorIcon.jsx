const RouteErrorIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      fill="red.main"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.375 0 12c0 6.629 5.373 12 12 12s12-5.371 12-12c0-6.625-5.373-12-12-12zm0 21.677A9.672 9.672 0 0 1 2.323 12 9.674 9.674 0 0 1 12 2.323 9.674 9.674 0 0 1 21.677 12 9.672 9.672 0 0 1 12 21.677zM17.19 9.33c0 3.244-3.505 3.294-3.505 4.493v.307c0 .32-.26.58-.58.58h-2.21a.58.58 0 0 1-.58-.58v-.419c0-1.73 1.311-2.421 2.302-2.977.85-.476 1.37-.8 1.37-1.43 0-.835-1.064-1.39-1.924-1.39-1.122 0-1.64.532-2.369 1.451a.581.581 0 0 1-.806.103L7.542 8.446a.582.582 0 0 1-.128-.792c1.143-1.679 2.6-2.622 4.866-2.622 2.375 0 4.91 1.854 4.91 4.297zm-3.158 8.09A2.034 2.034 0 0 1 12 19.453a2.035 2.035 0 0 1-2.032-2.033c0-1.12.911-2.032 2.032-2.032 1.12 0 2.032.912 2.032 2.032z"></path>
    </svg>
  );
};

export default RouteErrorIcon;
