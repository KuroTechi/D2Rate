import styles from "./HeroesByAttribute.module.scss";
import HeroCard from "../HeroCard/HeroCard.jsx";

export default function HeroesByAttribute({ title, heroes = [] }) {
  const images = {
    Strength: "str",
    Agility: "agi",
    Intelligence: "int",
    Universal: "all",
  };

  const imageUrl = `https://cdn.stratz.com/images/dota2/primary_attributes/${images[title]}.png`;

  return (
    <div className={styles.heroes}>
      <div className={styles.header}>
        <img
          className={styles.image}
          src={imageUrl}
          alt=""
          aria-hidden="true"
        />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.list} role="list">
        {heroes.map((hero) => (
          <HeroCard
            heroInGameName={hero.shortName}
            heroFullName={hero.displayName}
            key={`heroes-list-${hero.id}-${hero.shortName}-${hero.displayName}`}
            role="listitem"
          />
        ))}
      </div>
    </div>
  );
}
