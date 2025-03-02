import { Link } from "react-router";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link to={"/"} className={styles.link} href="/" aria-label="Home">
      <img
        className={styles.image}
        src="/logo.svg"
        alt=""
        width="47"
        height="33"
      />
    </Link>
  );
};

export default Logo;
