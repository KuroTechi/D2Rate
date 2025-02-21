import LeaguesIcon from "../../UI/icons/LeaguesIcon";
import styles from "./Preview.module.scss";

export default function Preview() {
  return (
    <div className={styles.wrapper}>
      <LeaguesIcon className={styles.icon} />
      <h2 className={styles.title}>Leagues</h2>
    </div>
  );
}
