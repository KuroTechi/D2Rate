import styles from "./HeroesBestWinrateByPosition.module.scss";
import React from "react";
import CarryRoleIcon from "../../../../../UI/icons/CarryRoleIcon";
import FullSupportRoleIcon from "../../../../../UI/icons/FullSupportRoleIcon";
import HardCarryRoleIcon from "../../../../../UI/icons/HardCarryRoleIcon";
import HardSupportRoleIcon from "../../../../../UI/icons/HardSupportRoleIcon";
import MiddleRoleIcon from "../../../../../UI/icons/MiddleRoleIcon";
import Card from "./Card/Card";

function HeroesBestWinrateByPosition() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <Card
          heroName={"Lifestealer"}
          shortName={"life_stealer"}
          position={"Easy Lane"}
          winRate={"57,07"}
          icon={<CarryRoleIcon />}
        />
        <Card
          heroName={"Dragon Knight"}
          shortName={"dragon_knight"}
          position={"Middle"}
          winRate={"55,62"}
          icon={<MiddleRoleIcon />}
        />
        <Card
          heroName={"Abbadon"}
          shortName={"abaddon"}
          position={"Hard Lane"}
          winRate={"58,25"}
          icon={<HardCarryRoleIcon />}
        />
        <Card
          heroName={"Abbadon"}
          shortName={"abaddon"}
          position={"Hard Support"}
          winRate={"58,25"}
          icon={<HardSupportRoleIcon />}
        />
        <Card
          heroName={"Abbadon"}
          shortName={"abaddon"}
          position={"Full Support"}
          winRate={"58,25"}
          icon={<FullSupportRoleIcon />}
        />
      </div>
    </div>
  );
}

export default React.memo(HeroesBestWinrateByPosition);
