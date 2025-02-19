import styles from "./BurgerButton.module.scss";

const BurgerButton = ({ isOpenOverlay, onClickOpenOverlay }) => {
  const handleClick = () => {
    onClickOpenOverlay();
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles["burger-button"]} ${
        isOpenOverlay ? styles["is-active"] : ""
      } visible-tablet`}
      type="button"
      aria-label="Open menu"
      title="Open menu"
    >
      <span className={styles["burger-button__line"]}></span>
      <span className={styles["burger-button__line"]}></span>
    </button>
  );
};

export default BurgerButton;
