import styles from "./FooterBody.module.scss";
import FooterLogo from "./FooterLogo/FooterLogo";
import Socials from "./Socials/Socials";

export default function FooterBody() {
  return (
    <div className={styles["footer__body"]}>
      <div className={styles["footer__body-wrapper"]}>
        <FooterLogo />
        <Socials />
      </div>
    </div>
  );
}
