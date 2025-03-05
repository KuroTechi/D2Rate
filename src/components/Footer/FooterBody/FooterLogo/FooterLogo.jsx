import styles from "./FooterLogo.module.scss";
import Logo from "../../../Header/Logo/Logo";

export default function FooterLogo() {
  return (
    <div className={styles.wrapper}>
      <Logo className={styles.logo} />
      <p className={styles.text}>D2RATE</p>
    </div>
  );
}
