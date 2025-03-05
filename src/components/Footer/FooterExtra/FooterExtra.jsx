import styles from "./FooterExtra.module.scss";
import Copyright from "./Copyright/Copyright";
const FooterExtra = () => {
  return (
    <div className={styles.extra}>
      <Copyright />
    </div>
  );
};

export default FooterExtra;
