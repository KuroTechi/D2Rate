import styles from "./Card.module.scss";

import Info from "./Info/Info";

export default function Card({ item }) {
  return (
    <a className={styles.link}>
      <div className={styles.card}>
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
