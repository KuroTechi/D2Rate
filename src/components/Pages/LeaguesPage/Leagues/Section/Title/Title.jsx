import styles from "./Title.module.scss";

export default function Title({ title, icon, isButtonNotActive }) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        {icon}
        <h2>{title}</h2>
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
