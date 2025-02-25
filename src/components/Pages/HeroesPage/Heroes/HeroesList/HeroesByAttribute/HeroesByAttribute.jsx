import styles from "./HeroesByAttribute.module.scss";
import HeroCard from "../HeroCard/HeroCard.jsx";
import React from "react";
import {
  useMediaQuery,
  media,
} from "../../../../../../utils/Hooks/MatchMedia.jsx";

function HeroesByAttribute({ title, heroes = [], searchQuery = "" }) {
  const isMobile = useMediaQuery(media.mobile);

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const isQueryEmpty = trimmedQuery === "";

  const images = {
    Strength: "str",
    Agility: "agi",
    Intelligence: "int",
    Universal: "all",
  };
  const imageUrl = `https://cdn.stratz.com/images/dota2/primary_attributes/${images[title]}.png`;

  const filteredHeroes =
    isMobile && !isQueryEmpty
      ? heroes.filter((hero) => {
          const matchesDispalyName = hero.displayName
            .toLowerCase()
            .includes(trimmedQuery);
          const matchesAliases = hero.aliases.some((alias) =>
            alias.toLowerCase().includes(trimmedQuery)
          );
          return matchesDispalyName || matchesAliases;
        })
      : heroes;

  if (isMobile && filteredHeroes.length === 0) {
    return null;
  }

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
        {filteredHeroes.map((hero) => (
          <HeroCard
            id={hero.id}
            winRate={hero.winRate}
            heroInGameName={hero.shortName}
            heroFullName={hero.displayName}
            key={`heroes-list-${hero.id}-${hero.shortName}-${hero.displayName}`}
            role="listitem"
            isMatch={
              isQueryEmpty ||
              hero.displayName.toLowerCase().includes(trimmedQuery) ||
              hero.aliases.some((alias) =>
                alias.toLowerCase().includes(trimmedQuery)
              )
            }
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(HeroesByAttribute);
