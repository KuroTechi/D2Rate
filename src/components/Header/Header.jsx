import styles from "./Header.module.scss";
import Logo from "./Logo/Logo.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import Actions from "./Actions/Actions.jsx";
import BurgerButton from "./BurgerButton/BurgerButton.jsx";
import UserProfileAvatar from "./UserProfileLink/UserProfileLink.jsx";
import ControlField from "../blocks/ControlField/ControlField.jsx";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery, media } from "../../utils/Hooks/MatchMedia.jsx";

export default function Header() {
  const [isOpenOverlay, setIsOpenOverlay] = useState(false);
  const isTablet = useMediaQuery(media.tablet);
  const selector = "is-lock";
  const htmlElementRef = useRef(document.documentElement);

  const handleClickOpenOverlay = () => {
    setIsOpenOverlay(!isOpenOverlay);
  };

  useEffect(() => {
    if (!isOpenOverlay) return;
    const htmlElement = htmlElementRef.current;
    htmlElement.classList.add(selector);

    return () => {
      htmlElement.classList.remove(selector);
    };
  }, [isOpenOverlay]);

  useEffect(() => {
    if (!isTablet && htmlElementRef.current.classList.contains(selector)) {
      setIsOpenOverlay(false);
      htmlElementRef.current.classList.remove(selector);
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
          className={`${styles.overlay} ${isOpenOverlay ? styles.active : ""}`}
        >
          <Navigation />
          <ControlField className={styles.input} />
          <Actions />
        </div>
        <UserProfileAvatar />
      </div>
    </header>
  );
}
