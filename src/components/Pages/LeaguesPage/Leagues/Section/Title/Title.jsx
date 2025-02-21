import styles from "./Title.module.scss";

export default function Title({ title, icon, isButtonNotActive }) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        {icon}
        <span>{title}</span>
      </div>

      <a
        className={`${styles.button}  ${
          isButtonNotActive && "button--not-active"
        } button`}
      >
        View All
      </a>
    </header>
  );
}
