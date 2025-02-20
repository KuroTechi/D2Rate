import styles from "./Footer.module.scss";
import FooterBody from "./FooterBody/FooterBody";
import FooterExtra from "./FooterExtra/FooterExtra";
export default function Footer() {
  return (
    <footer className={`${styles.footer}  footer`}>
      <FooterBody />
      <FooterExtra />
    </footer>
  );
}
