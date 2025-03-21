import { useApolloClient } from "@apollo/client";
import { HERO_FRAGMENT } from "../../../../../../../graphql/fragments/heroes";
import {
  useMediaQuery,
  media,
} from "../../../../../../../utils/Hooks/MatchMedia";
import { baseUrl } from "../../../../../../../utils/urls/baseUrl";
import styles from "./Card.module.scss";
import LaptopVersion from "./LaptopVersion";

const Card = ({ winRate, position, icon, heroId }) => {
  console.log(winRate);

  const formattedWinrate = winRate ? `${winRate.toFixed(2)} %` : "-";

  const client = useApolloClient();
  const isLaptop = useMediaQuery(media.laptop);

  const heroDetails = heroId
    ? client.readFragment({
        id: `HeroType:${heroId}`,
        fragment: HERO_FRAGMENT,
      })
    : null;

  const heroName = heroDetails?.displayName ?? "";
  const heroShortName = heroDetails?.shortName ?? "";

  const imageType = isLaptop ? "icon" : "model";
  const heroImage = heroShortName
    ? `${baseUrl.images.heroPicture}${heroShortName}_${imageType}.png`
    : null;

  if (isLaptop)
    return (
      <LaptopVersion
        heroImage={heroImage}
        winRate={winRate}
        icon={icon}
        heroName={heroName}
        styles={styles}
      />
    );

  return (
    <div className={`${styles.card} border`}>
      <div className={styles.background}></div>
      <div className={styles.preview}>
        {heroImage ? (
          <img
            className={styles.image}
            width="140"
            height="140"
            src={heroImage}
            alt={heroName}
            loading="lazy"
          />
        ) : null}
      </div>
      {icon}
      <div className={styles.info}>
        <span className={styles.lane}>{position}</span>
        <span className={styles.hero}>{heroName || "No Info"}</span>
        <span className={styles.winrate}>{formattedWinrate}</span>
        <span className={styles.text}>Winrate</span>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default Card;
