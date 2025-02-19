import styles from "./Header.module.scss";

const Header = ({ title, icon, isButtonNotActive }) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        {icon}
        <span>{title}</span>
      </div>
      <a>
        <button
          className={`${styles.button}  ${
            isButtonNotActive && "button--not-active"
          } button`}
        >
          View All
        </button>
      </a>
    </header>
  );
};

export default Header;
