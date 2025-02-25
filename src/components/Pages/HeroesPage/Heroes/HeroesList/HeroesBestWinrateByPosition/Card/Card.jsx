import {
  useMediaQuery,
  media,
} from "../../../../../../../utils/Hooks/MatchMedia";
import { baseUrl } from "../../../../../../../utils/Hooks/baseUrl";
import styles from "./Card.module.scss";
import LaptopVersion from "./LaptopVersion";
const Card = ({ heroName, shortName, position, winRate, icon }) => {
  const isLaptop = useMediaQuery(media.laptop);
  const imageType = isLaptop ? "icon" : "model";
  const heroImage = `${baseUrl.images.heroPicture}${shortName}_${imageType}.png`;

  if (isLaptop)
    return (
      <LaptopVersion
        heroImage={heroImage}
        winRate={winRate}
        icon={icon}
        heroName={heroName || shortName}
        styles={styles}
      />
    );

  return (
    <div className={styles.card}>
      <div className={styles.background}></div>
      <div className={styles.preview}>
        <img
          className={styles.image}
          width="140"
          height="140"
          src={heroImage}
          alt={heroName}
          loading="lazy"
        />
      </div>
      {icon}
      <div className={styles.info}>
        <span className={styles.lane}>{position}</span>
        <span className={styles.hero}>{heroName}</span>
        <span className={styles.winrate}>{winRate} %</span>
        <span className={styles.text}>Winrate</span>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default Card;
