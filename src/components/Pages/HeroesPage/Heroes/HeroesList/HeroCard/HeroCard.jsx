import styles from "./HeroCard.module.scss";
import React from "react";
function HeroCard({ heroInGameName, heroFullName, isMatch, id }) {
  const baseUrl = `https://cdn.stratz.com/images/dota2/heroes/${heroInGameName}_vert.png`;
  // console.log(id + "-id " + heroFullName + "-name ");

  return (
    <div className={`${styles.card} ${!isMatch ? styles.disabled : ""}`}>
      <img
        className={styles.image}
        src={baseUrl}
        alt={heroFullName || heroInGameName}
        loading="lazy"
      />
    </div>
  );
}

export default React.memo(HeroCard);
