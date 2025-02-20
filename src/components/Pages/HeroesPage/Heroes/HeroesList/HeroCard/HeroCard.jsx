import styles from "./HeroCard.module.scss";

export default function HeroCard({ heroInGameName, heroFullName }) {
  const baseUrl = `https://cdn.stratz.com/images/dota2/heroes/${heroInGameName}_vert.png`;

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={baseUrl}
        alt={heroFullName || heroInGameName}
        loading="lazy"
      />
    </div>
  );
}
