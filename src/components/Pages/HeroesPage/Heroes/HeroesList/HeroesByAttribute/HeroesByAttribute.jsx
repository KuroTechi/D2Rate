import styles from "./HeroesByAttribute.module.scss";
import HeroCard from "./HeroCard/HeroCard.jsx";
import React, { useMemo } from "react";
import {
  useMediaQuery,
  media,
} from "../../../../../../utils/Hooks/MatchMedia.jsx";

import { baseUrl } from "../../../../../../utils/urls/baseUrl.js";
function HeroesByAttribute({ title, heroes = [], searchQuery = "", showMeta }) {
  const isMobile = useMediaQuery(media.mobile);
  const META_THRESHOLD = 51;

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const isQueryEmpty = trimmedQuery === "";

  const attributes = {
    Strength: "str",
    Agility: "agi",
    Intelligence: "int",
    Universal: "all",
  };

  const imageUrl = `${baseUrl.images.attributePicture}${attributes[title]}.png`;

  const matchesQuery = (hero, searchQuery) => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    return (
      isQueryEmpty ||
      hero.displayName.toLowerCase().includes(trimmedQuery) ||
      hero.aliases.some((alias) => alias.toLowerCase().includes(trimmedQuery))
    );
  };

  const filteredHeroes = useMemo(() => {
    let result = heroes;

    if (showMeta && isMobile) {
      result = result.filter((hero) => hero.winRate > META_THRESHOLD);
    }

    if (!isQueryEmpty && isMobile) {
      result = result.filter((hero) => matchesQuery(hero, searchQuery));
    }
    return result;
  }, [heroes, searchQuery, showMeta, isMobile]);

  if (isMobile && filteredHeroes.length === 0) return null;

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
            isMatch={matchesQuery(hero, searchQuery)}
            metaThreshold={META_THRESHOLD}
            showMeta={showMeta}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(HeroesByAttribute);
