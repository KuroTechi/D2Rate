import styles from "./FooterBody.module.scss";
import FooterLogo from "./FooterLogo/FooterLogo";
import Socials from "./Socials/Socials";

export default function FooterBody() {
  return (
    <div className={styles.body}>
      <div className={`${styles.wrapper} container`}>
        <FooterLogo />
        <Socials />
      </div>
    </div>
  );
}
