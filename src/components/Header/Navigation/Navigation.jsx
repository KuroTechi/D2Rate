import styles from "./Navigation.module.scss";
import Item from "../Item/Item.jsx";
import useMediaQuery from "../../../utils/Hooks/MatchMedia";
import { useState } from "react";
import { media } from "../data.js";

const Navigation = ({ items }) => {
  const [isActive, setIsActive] = useState(null);
  const isTablet = useMediaQuery(media.tablet);

  const handleClick = (index) => {
    if (isTablet && isActive !== index) {
      setIsActive(index);
    }
    if (isTablet && isActive === index) {
      setIsActive(null);
    }
  };
  const handleMouseEnter = (index) => {
    if (!isTablet && isActive !== index) {
      setIsActive(index);
    }
  };
  const handleMouseLeave = (index) => {
    if (!isTablet && isActive === index) {
      setIsActive(null);
    }
  };

  return (
    <nav className={styles["navigation"]} aria-label="Main Navigation">
      <ul className={styles["navigation__list"]}>
        {items.map((item, index) => (
          <Item
            item={item}
            key={item.value}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleClick(index)}
            isActive={isActive === index}
            isTablet={isTablet}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
