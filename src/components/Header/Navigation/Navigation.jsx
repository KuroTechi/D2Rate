import styles from "./Navigation.module.scss";
import Item from "../Item/Item.jsx";
import { useMediaQuery, media } from "../../../utils/Hooks/MatchMedia";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { navigationItems } from "./data.js";
const Navigation = () => {
  const [isActive, setIsActive] = useState(null);
  const isTablet = useMediaQuery(media.tablet);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsActive(null);
  }, [location.pathname]);

  useEffect(() => {
    setIsActive(null);
  }, [isTablet]);

  const handleClick = (index) => {
    const path = navigationItems[index].path;
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
        {navigationItems.map((item, index) => (
          <Item
            item={item}
            key={`${item.value}-${index}`}
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
