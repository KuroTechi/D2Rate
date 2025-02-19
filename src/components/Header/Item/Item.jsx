import styles from "./Item.module.scss";

import Icon from "../../UI/Icon";

const Item = ({
  item,
  onMouseEnter,
  onMouseLeave,
  onClick,
  isActive,
  isTablet,
}) => {
  return (
    <>
      <li
        className={`${styles["item"]} ${isActive ? styles["is-active"] : ""}`}
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
        <span className={styles["item__text"]}>{item.value}</span>
        {item.iconRight && (
          <Icon
            name={item.iconRight}
            className={`${styles["item__icon--right"]} icon`}
          />
        )}
        {!isTablet && item.submenu && isActive && (
          <SubMenu id={`submenu-${item.value}`} submenu={item.submenu} />
        )}
      </li>
      {isTablet && item.submenu && isActive && (
        <SubMenu id={`submenu-${item.value}`} submenu={item.submenu} />
      )}
    </>
  );
};

const SubMenu = ({ submenu }) => {
  return (
    <ul className={`${styles["submenu"]}`}>
      {submenu.map((subItem) => (
        <li
          onClick={() => console.log(subItem.text)}
          className={`${styles["submenu__item"]}`}
          key={subItem.text}
        >
          <a className={`${styles["submenu__item-link"]}`} href={subItem.link}>
            {subItem.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
