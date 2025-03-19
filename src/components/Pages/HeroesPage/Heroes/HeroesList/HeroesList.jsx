import styles from "./HeroesList.module.scss";
import HeroesByAttribute from "./HeroesByAttribute/HeroesByAttribute";
import debounce from "lodash/debounce";
import { useState, useMemo, useEffect } from "react";
import ControlField from "../../../../blocks/ControlField/ControlField";
import HeroesBestWinrateByPosition from "./HeroesBestWinrateByPosition/HeroesBestWinrateByPosition";
import ShowMetaHeroesButton from "./ShowMetaHeroesButton/ShowMetaHeroesButton";
import groupHeroesByAttribute from "./groupHeroesByAttribute";
import { useQuery } from "@apollo/client";
import {
  GET_HEROES,
  GET_HEROES_WEEK_STATS,
} from "../../../../../graphql/queries/heroes";
import Spinner from "../../../../blocks/Spinner/Spinner";
import { GAME_MODE_IDS } from "./HeroesBestWinrateByPosition/gameModeId";

export default function HeroesList() {
  const [inputValue, setInputValue] = useState("");
  const [showMeta, setShowMeta] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: heroesData,
    loading: heroesLoading,
    error: heroesError,
  } = useQuery(GET_HEROES);

  const {
    data: statsData,
    loading: statsLoading,
    error: statsError,
  } = useQuery(GET_HEROES_WEEK_STATS, {
    variables: {
      take: 7,
      gameModeIds: GAME_MODE_IDS.ALL_PICK_RANKED,
    },
  });

  const heroes = useMemo(
    () => heroesData?.constants?.heroes || [],
    [heroesData]
  );
  const stats = useMemo(() => statsData?.heroStats?.winDay || [], [statsData]);

  const heroesByAttribute = useMemo(
    () => groupHeroesByAttribute(heroes, stats),
    [heroes, stats]
  );

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

  if (heroesLoading || statsLoading)
    return <Spinner className={styles.spinner} />;
  if (heroesError || statsError) return <div>Ошибка</div>;

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
          <ShowMetaHeroesButton
            showMeta={showMeta}
            handleShowMeta={handleShowMeta}
          />
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
