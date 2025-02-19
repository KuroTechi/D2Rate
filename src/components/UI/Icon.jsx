import TrendingIcon from "./icons/TrendingIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import LeaguesIcon from "./icons/LeaguesIcon";
import ContributeIcon from "./icons/ContributeIcon";
import SearchIcon from "./icons/SearchIcon";
import NotificationsIcon from "./icons/NotificationsIcon";
import SettingsIcon from "./icons/Settings";
import PlayersIcon from "./icons/PlayersIcon";
import HeroesIcon from "./icons/HeroesIcon";
const icons = {
  trending: TrendingIcon,
  leagues: LeaguesIcon,
  contribute: ContributeIcon,
  arrowDown: ArrowDownIcon,
  search: SearchIcon,
  notifications: NotificationsIcon,
  settings: SettingsIcon,
  players: PlayersIcon,
  heroes: HeroesIcon,
};

const Icon = ({ name, className = "" }) => {
  const Component = icons[name] || null;
  return Component ? <Component className={className} /> : null;
};

export default Icon;
