import ImageNotFoundIcon from "../../../../../../UI/icons/ImageNotFoundIcon";

const LaptopVersion = ({ heroImage, winRate, icon, heroName, styles }) => {
  return (
    <div className={`${styles.card} border`}>
      <div className={styles.background}></div>
      {heroImage ? (
        <img
          className={styles.image}
          width="32"
          height="32"
          alt={heroName}
          src={heroImage}
          loading="lazy"
        />
      ) : (
        <div className={styles.wrapper}>
          <ImageNotFoundIcon className={styles.image} />
        </div>
      )}

      <div className={styles.info}>
        {icon}
        {winRate ? (
          <span className={styles.winrate}>{winRate.toFixed(1)} %</span>
        ) : null}
      </div>
    </div>
  );
};

export default LaptopVersion;
