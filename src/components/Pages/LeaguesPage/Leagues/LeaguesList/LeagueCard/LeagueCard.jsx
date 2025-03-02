import styles from "./LeagueCard.module.scss";
import Info from "./Info/Info";

export default function LeagueCard({ item }) {
  return (
    <a className={styles.link}>
      <div className={`${styles.card} border`}>
        <img
          className={styles.image}
          src={item.image}
          alt={item.league || "League Preview"}
        />
        <Info title={item.league} date={item.date} prize={item.prize} />
      </div>
    </a>
  );
}
