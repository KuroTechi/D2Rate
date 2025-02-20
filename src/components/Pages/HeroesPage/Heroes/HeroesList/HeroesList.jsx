import styles from "./HeroesList.module.scss";
import HeroesByAttribute from "./HeroesByAttribute/HeroesByAttribute";
import { query } from "./data";
export default function HeroesList() {
  const heroes = query.data.constants.heroes;

  const heroesByAttribute = {
    str: [],
    agi: [],
    int: [],
    all: [],
  };

  heroes.forEach((hero) => {
    heroesByAttribute[hero.stats.primaryAttribute].push(hero);
  });

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container`}>
        <div className={styles.list}>
          <HeroesByAttribute
            title={"Strength"}
            heroes={heroesByAttribute.str}
          />
          <HeroesByAttribute title={"Agility"} heroes={heroesByAttribute.agi} />
          <HeroesByAttribute
            title={"Intelligence"}
            heroes={heroesByAttribute.int}
          />
          <HeroesByAttribute
            title={"Universal"}
            heroes={heroesByAttribute.all}
          />
        </div>
      </div>
    </div>
  );
}
