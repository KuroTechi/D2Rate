import styles from "./CardHeader.module.scss";
import AegisIcon from "../../../UI/icons/AegisIcon";

export default function CardHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.status}>
        <AegisIcon className={`${styles.icon} icon--medium`} />
        <p className={styles.text}>Ongoing</p>
      </div>
      <h3 className={styles.title}>Lima Major 2023</h3>
    </div>
  );
}
