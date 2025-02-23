import styles from "./Header.module.scss";
import Logo from "./Logo/Logo.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import Actions from "./Actions/Actions.jsx";
import BurgerButton from "./BurgerButton/BurgerButton.jsx";
import UserProfileAvatar from "./UserProfileLink/UserProfileLink.jsx";
import ControlField from "../blocks/ControlField.jsx";
import { media, navigationItems } from "./data.js";
import { useEffect, useState } from "react";
import useMediaQuery from "../../utils/Hooks/MatchMedia.jsx";

export default function Header() {
  const [isOpenOverlay, setIsOpenOverlay] = useState(false);
  const isTablet = useMediaQuery(media.tablet);
  const selector = "is-lock";
  const htmlElement = document.documentElement;

  const handleClickOpenOverlay = () => {
    setIsOpenOverlay(!isOpenOverlay);
  };

  useEffect(() => {
    if (!isOpenOverlay) return;
    htmlElement.classList.add(selector);

    return () => {
      htmlElement.classList.remove(selector);
    };
  }, [isOpenOverlay]);

  useEffect(() => {
    if (!isTablet && htmlElement.classList.contains(selector)) {
      setIsOpenOverlay(false);
      htmlElement.classList.remove(selector);
    }
  }, [isTablet]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <BurgerButton
          isOpenOverlay={isOpenOverlay}
          onClickOpenOverlay={handleClickOpenOverlay}
        />
        <Logo />
        <div
          className={`${styles.overlay} ${
            isOpenOverlay ? styles["is-active"] : ""
          }`}
        >
          <Navigation items={navigationItems} />
          <ControlField className={styles.input} />
          <Actions />
        </div>
        <UserProfileAvatar />
      </div>
    </header>
  );
}
