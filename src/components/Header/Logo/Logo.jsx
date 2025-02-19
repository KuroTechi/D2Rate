import styles from "./Logo.module.scss";

const Logo = ({ className }) => {
  return (
    <a href="/" aria-label="Home" title="Home">
      <img
        className={className}
        src="/logo.svg"
        alt=""
        width="47"
        height="33"
      />
    </a>
  );
};

export default Logo;
