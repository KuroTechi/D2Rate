import styles from "./Navigation.module.scss";
import Item from "../Item/Item.jsx";
import { useMediaQuery, media } from "../../../utils/Hooks/MatchMedia";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const Navigation = ({ items }) => {
  const [isActive, setIsActive] = useState(null);
  const isTablet = useMediaQuery(media.tablet);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive !== null) {
      setIsActive(null);
    }
  }, [isTablet]);

  const handleClick = (index) => {
    const path = items[index].path;
    if (isTablet) {
      if (isActive !== index) {
        setIsActive(index);
      } else {
        setIsActive(null);
      }
    }

    if (!isTablet) {
      navigate(path);
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
    <nav className={styles.navigation} aria-label="Main Navigation">
      <ul className={styles.list}>
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
