import styles from "./Info.module.scss";
import DateIcon from "../../../../../../UI/icons/DateIcon";

export default function Info({ title, date, prize }) {
  return (
    <div className={styles.info}>
      <span title={title} className={styles.title}>
        {title}
      </span>
      <div className={styles.body}>
        <div className={`${styles.date} tile`}>
          <DateIcon
            className={`${styles.icon} icon icon--medium icon--default-color`}
          />
          <span>{date}</span>
        </div>
        <span className={`${styles.prize} tile`}>${prize}</span>
      </div>
    </div>
  );
}
