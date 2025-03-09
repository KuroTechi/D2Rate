import styles from "./Spinner.module.scss";

export default function Spinner({ className }) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <span>Loading</span>
      <svg className={styles.loader} viewBox="0 0 50 50">
        <circle
          className={styles.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
}
