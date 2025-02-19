import styles from "./CardFooter.module.scss";
import TeamsList from "./TeamList/TeamList";
export default function CardFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.title}>Ongoing match</div>
      <TeamsList />
    </div>
  );
}
