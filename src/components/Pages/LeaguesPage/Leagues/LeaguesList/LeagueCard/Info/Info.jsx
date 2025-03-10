import styles from "./Info.module.scss";
import DateIcon from "../../../../../../UI/icons/DateIcon";

export default function Info({ title, date, prize }) {
  return (
    <div className={styles.info}>
      <h3 title={title} className={styles.title}>
        {title ? title : "No league name"}
      </h3>
      <div className={styles.body}>
        <div className={`${styles.date} tile`}>
          <DateIcon
            className={`${styles.icon} icon icon--medium icon--default-color`}
          />
          <span>{date ? date : "No league date"}</span>
        </div>
        {prize ? (
          <span className={`${styles.prize} tile`}>${prize}</span>
        ) : null}
      </div>
    </div>
  );
}
