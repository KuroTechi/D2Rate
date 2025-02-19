import styles from "./FooterLogo.module.scss";
import Logo from "../../../Header/Logo/Logo";

export default function FooterLogo() {
  return (
    <div className={styles["footer__logo"]}>
      <Logo className={styles["footer__logo-image"]} />
      <p className={styles["footer__logo-text"]}>D2RATE</p>
    </div>
  );
}
