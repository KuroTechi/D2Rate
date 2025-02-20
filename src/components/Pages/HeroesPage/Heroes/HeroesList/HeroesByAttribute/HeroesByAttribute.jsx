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
          alt={title || "Attribute Image"}
        />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.list}>
        {heroes.map((hero) => (
          <HeroCard
            heroInGameName={hero.shortName}
            heroFullName={hero.displayName}
            key={`heroes-list-${hero.id}-${hero.shortName}-${hero.displayName}`}
          />
        ))}
      </div>
    </div>
  );
}
