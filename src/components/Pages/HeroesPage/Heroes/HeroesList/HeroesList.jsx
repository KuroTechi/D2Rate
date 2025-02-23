import styles from "./HeroesList.module.scss";
import HeroesByAttribute from "./HeroesByAttribute/HeroesByAttribute";
import debounce from "lodash/debounce";
import { query } from "./data";
import { useState, useMemo, useEffect } from "react";
import ControlField from "../../../../blocks/ControlField";
export default function HeroesList() {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const heroes = query.data.constants.heroes;

  const heroesByAttribute = useMemo(() => {
    const result = {
      str: [],
      agi: [],
      int: [],
      all: [],
    };
    heroes.forEach((hero) => {
      result[hero.stats.primaryAttribute].push(hero);
    });
    return result;
  }, [heroes]);

  const debouncedSetSearch = useMemo(
    () => debounce((value) => setSearchQuery(value.toLowerCase()), 300),
    []
  );
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetSearch(value);
  };
  useEffect(() => {
    if (!inputValue) setSearchQuery("");
  }, [inputValue]);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container`}>
        <ControlField
          className={styles.input}
          placeholder="Search by heroes"
          ariaLabel="Search by heroes"
          type="search"
          maxLength={30}
          value={inputValue}
          onChange={handleSearchChange}
        />
        <div className={styles.list}>
          <HeroesByAttribute
            title={"Strength"}
            heroes={heroesByAttribute.str}
            searchQuery={searchQuery}
          />
          <HeroesByAttribute
            title={"Agility"}
            heroes={heroesByAttribute.agi}
            searchQuery={searchQuery}
          />
          <HeroesByAttribute
            title={"Intelligence"}
            heroes={heroesByAttribute.int}
            searchQuery={searchQuery}
          />
          <HeroesByAttribute
            title={"Universal"}
            heroes={heroesByAttribute.all}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
}
