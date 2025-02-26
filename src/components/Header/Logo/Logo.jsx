import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <a className={styles.link} href="/" aria-label="Home" title="Home">
      <img
        className={styles.image}
        src="/logo.svg"
        alt=""
        width="47"
        height="33"
      />
    </a>
  );
};

export default Logo;
