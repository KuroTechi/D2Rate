import styles from "./Item.module.scss";
import { Link, useLocation } from "react-router";
import Icon from "../../UI/Icon";
import { useMemo } from "react";
import { Submenu } from "./Submenu/Submenu";
import ArrowDownIcon from "../../UI/icons/ArrowDownIcon";

const Item = ({
  item,
  onMouseEnter,
  onMouseLeave,
  onClick,
  isActive,
  isTablet,
}) => {
  return (
    <li
      className={styles.wrapper}
      onFocus={onMouseEnter}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlur={onMouseLeave}
      onClick={onClick}
    >
      <WrapperByMediaValue isTablet={isTablet} isActive={isActive} item={item}>
        {item.iconLeft && (
          <Icon
            name={item.iconLeft}
            className={`${styles["item__icon--left"]} icon`}
          />
        )}
        <span className={styles.text}>{item.value}</span>
        <ArrowDownIcon className={`${styles["item__icon--right"]} icon`} />
      </WrapperByMediaValue>
      {item.submenu && isActive && (
        <Submenu id={`submenu-${item.value}`} submenu={item.submenu} />
      )}
    </li>
  );
};

const WrapperByMediaValue = ({ children, isTablet, isActive, item }) => {
  const location = useLocation();

  const isRouteActive = useMemo(() => {
    return location.pathname === item.path;
  }, [location.pathname, item.path]);

  return !isTablet ? (
    <Link
      to={item.path}
      className={`${styles.item} ${isActive ? styles["is-active"] : ""} ${
        isRouteActive ? styles["is-active-route"] : ""
      } `}
    >
      {children}
    </Link>
  ) : (
    <div
      className={`${styles.item} ${isActive ? styles["is-active"] : ""} ${
        isRouteActive ? styles["is-active-route"] : ""
      } `}
    >
      {children}
    </div>
  );
};

export default Item;
