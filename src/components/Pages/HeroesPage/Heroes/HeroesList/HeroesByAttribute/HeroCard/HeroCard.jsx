import styles from "./HeroCard.module.scss";
import React from "react";
import MetaHeroIcon from "../../../../../../UI/icons/MetaHeroIcon";
import { baseUrl } from "../../../../../../../utils/urls/baseUrl";

function HeroCard({
  heroInGameName,
  heroFullName,
  isMatch,
  winRate,
  metaThreshold,
  showMeta,
}) {
  const image = `${baseUrl.images.heroPicture}${heroInGameName}_vert.png`;

  const isMeta = winRate > metaThreshold ? styles.meta : "";
  const isHeroNameMatchWithQuery = isMatch ? "" : styles.disabled;

  const isDisabled = showMeta ? winRate < metaThreshold : false;

  return (
    <div
      className={`${styles.card} ${isMeta} ${isHeroNameMatchWithQuery} ${
        isDisabled ? styles.disabled : ""
      } `}
    >
      <img
        className={styles.image}
        src={image}
        alt={heroFullName || heroInGameName}
        loading="lazy"
      />
      {winRate > metaThreshold ? (
        <MetaHeroIcon className={`${styles.icon} icon icon--fill-yellow`} />
      ) : null}
    </div>
  );
}

export default React.memo(HeroCard);
