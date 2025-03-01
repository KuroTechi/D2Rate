import styles from "./HeroesList.module.scss";
import HeroesByAttribute from "./HeroesByAttribute/HeroesByAttribute";
import debounce from "lodash/debounce";
import { query, heroesWeekStats } from "./data";
import { useState, useMemo, useEffect } from "react";
import ControlField from "../../../../blocks/ControlField";
import HeroesBestWinrateByPosition from "./HeroesBestWinrateByPosition/HeroesBestWinrateByPosition";
import MetaHeroIcon from "../../../../UI/icons/MetaHeroIcon";
export default function HeroesList() {
  const [inputValue, setInputValue] = useState("");
  const [showMeta, setShowMeta] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const heroes = query.data.constants.heroes;
  const stats = heroesWeekStats.data.heroStats.winDay;

  const heroesByAttribute = useMemo(() => {
    if (!heroes || !stats || heroes.length === 0 || stats.length === 0) {
      return { str: [], agi: [], int: [], all: [] };
    }
    const result = {
      str: [],
      agi: [],
      int: [],
      all: [],
    };

    const heroesStats = {};

    stats.forEach((entry) => {
      const { heroId, matchCount, winCount } = entry;
      if (heroId === 0) return;
      if (!heroesStats[heroId]) {
        heroesStats[heroId] = {
          matchCount: 0,
          winCount: 0,
        };
      }

      heroesStats[heroId].matchCount += matchCount;
      heroesStats[heroId].winCount += winCount;
    });

    heroes.forEach((hero) => {
      const heroWithWinrate = heroesStats[hero.id] || {
        matchCount: 0,
        winCount: 0,
      };

      const { matchCount, winCount } = heroWithWinrate;

      const winRate = matchCount > 0 ? (winCount / matchCount) * 100 : 0;

      result[hero.stats.primaryAttribute].push({
        ...hero,
        winRate: winRate,
      });
    });

    Object.keys(result).forEach((key) =>
      result[key].sort((a, b) => a.displayName.localeCompare(b.displayName))
    );
    return result;
  }, [heroes, stats]);

  const debouncedSetSearch = useMemo(() => {
    return debounce((value) => setSearchQuery(value.toLowerCase()), 300);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetSearch(value);
  };
  useEffect(() => {
    if (!inputValue) setSearchQuery("");
  }, [inputValue]);

  const handleShowMeta = () => {
    setShowMeta((prev) => !prev);
  };
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container`}>
        <HeroesBestWinrateByPosition />
        <div className={`${styles.actions}`}>
          <ControlField
            className={styles.input}
            placeholder="Search by heroes"
            ariaLabel="Search by heroes"
            type="search"
            maxLength={30}
            value={inputValue}
            onChange={handleSearchChange}
          />
          <button
            className={`${styles.button} ${
              showMeta ? styles.active : ""
            } button border`}
            onClick={handleShowMeta}
            aria-label={showMeta ? "Hide meta heroes" : "Show meta heroes"}
            aria-pressed={showMeta}
          >
            <span>
              <MetaHeroIcon className={styles.icon} />
            </span>
          </button>
        </div>

        <div className={styles.list}>
          <HeroesByAttribute
            title={"Strength"}
            heroes={heroesByAttribute.str}
            searchQuery={searchQuery}
            showMeta={showMeta}
          />
          <HeroesByAttribute
            title={"Agility"}
            heroes={heroesByAttribute.agi}
            searchQuery={searchQuery}
            showMeta={showMeta}
          />
          <HeroesByAttribute
            title={"Intelligence"}
            heroes={heroesByAttribute.int}
            searchQuery={searchQuery}
            showMeta={showMeta}
          />
          <HeroesByAttribute
            title={"Universal"}
            heroes={heroesByAttribute.all}
            searchQuery={searchQuery}
            showMeta={showMeta}
          />
        </div>
      </div>
    </div>
  );
}
