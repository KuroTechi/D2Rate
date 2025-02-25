import styles from "./Item.module.scss";
import { useLocation } from "react-router";
import Icon from "../../UI/Icon";
import { useMemo } from "react";
import { Submenu } from "./Submenu/Submenu";

const Item = ({
  item,
  onMouseEnter,
  onMouseLeave,
  onClick,
  isActive,
  isTablet,
}) => {
  const location = useLocation();

  const isRouteActive = useMemo(() => {
    return location.pathname === item.path;
  }, [location.pathname, item.path]);

  return (
    <>
      <li
        className={`${styles.item} ${isActive ? styles["is-active"] : ""} ${
          isRouteActive ? styles["is-active-route"] : ""
        } `}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        onFocus={onMouseEnter}
        onBlur={onMouseLeave}
        tabIndex="0"
        aria-expanded={isActive}
        aria-controls={`submenu-${item.value}`}
      >
        {item.iconLeft && (
          <Icon
            name={item.iconLeft}
            className={`${styles["item__icon--left"]} icon`}
          />
        )}
        <span className={styles.text}>{item.value}</span>
        {item.iconRight && (
          <Icon
            name={item.iconRight}
            className={`${styles["item__icon--right"]} icon`}
          />
        )}
        {!isTablet && item.submenu && isActive && (
          <Submenu id={`submenu-${item.value}`} submenu={item.submenu} />
        )}
      </li>
      {isTablet && item.submenu && isActive && (
        <Submenu id={`submenu-${item.value}`} submenu={item.submenu} />
      )}
    </>
  );
};

export default Item;
