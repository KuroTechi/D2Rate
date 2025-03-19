import styles from "./HeroesBestWinrateByPosition.module.scss";
import React, { useMemo } from "react";
import CarryRoleIcon from "../../../../../UI/icons/CarryRoleIcon";
import FullSupportRoleIcon from "../../../../../UI/icons/FullSupportRoleIcon";
import HardCarryRoleIcon from "../../../../../UI/icons/HardCarryRoleIcon";
import HardSupportRoleIcon from "../../../../../UI/icons/HardSupportRoleIcon";
import MiddleRoleIcon from "../../../../../UI/icons/MiddleRoleIcon";
import Card from "./Card/Card";
import { useHeroesStatsByPositionQuery } from "./useHeroesStatsByPositionQuery.js";
import Spinner from "../../../../../blocks/Spinner/Spinner";
import { getBestWinrateHeroByPosition } from "./getBestWinrateHeroByPosition.js";
import { POSITION_GRAPHQL_FIELD, POSITION_NAMES } from "./positions.js";

const roleIcons = {
  carry: <CarryRoleIcon />,
  mid: <MiddleRoleIcon />,
  offlane: <HardCarryRoleIcon />,
  softSupport: <HardSupportRoleIcon />,
  hardSupport: <FullSupportRoleIcon />,
};

function HeroesBestWinrateByPosition() {
  const carry = useHeroesStatsByPositionQuery(POSITION_GRAPHQL_FIELD.CARRY);
  const mid = useHeroesStatsByPositionQuery(POSITION_GRAPHQL_FIELD.MID);
  const offlane = useHeroesStatsByPositionQuery(POSITION_GRAPHQL_FIELD.OFFLANE);
  const softSupport = useHeroesStatsByPositionQuery(
    POSITION_GRAPHQL_FIELD.SOFT_SUPPORT
  );
  const hardSupport = useHeroesStatsByPositionQuery(
    POSITION_GRAPHQL_FIELD.HARD_SUPPORT
  );

  const queries = [carry, mid, offlane, softSupport, hardSupport];

  const data = queries.map((query) => query.data?.heroStats?.winDay);

  const loading = queries.some((query) => query.loading);

  const heroes = useMemo(() => {
    if (loading) return null;
    return getBestWinrateHeroByPosition(data);
  }, [data, loading]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {loading ? (
          <Spinner className={styles.spinner} />
        ) : (
          heroes &&
          Object.entries(heroes).map(([position, hero]) =>
            hero ? (
              <Card
                key={position}
                heroId={hero.heroId}
                winRate={hero.winRate}
                position={POSITION_NAMES[position]}
                icon={roleIcons[position]}
              />
            ) : (
              <Card
                key={position}
                position={POSITION_NAMES[position]}
                icon={roleIcons[position]}
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export default React.memo(HeroesBestWinrateByPosition);
