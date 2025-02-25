const LaptopVersion = ({ heroImage, winRate, icon, heroName, styles }) => {
  return (
    <div className={styles.card}>
      <div className={styles.background}></div>
      <img
        className={styles.image}
        width="32"
        height="32"
        alt={heroName}
        src={heroImage}
        loading="lazy"
      />
      <div className={styles.info}>
        {icon}
        <span className={styles.winrate}>{winRate.slice(0, 4)} %</span>
      </div>
    </div>
  );
};

export default LaptopVersion;
