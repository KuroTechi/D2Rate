import { useQuery } from "@apollo/client";
import { GET_HEROES_WEEK_STATS_BY_POSITION } from "../../../../../../graphql/queries/heroes";
import { GAME_MODE_IDS } from "./gameModeId";

const useHeroesStatsByPositionQuery = (positionId) => {
  return useQuery(GET_HEROES_WEEK_STATS_BY_POSITION, {
    variables: {
      take: 1,
      gameModeIds: GAME_MODE_IDS.ALL_PICK_RANKED,
      positionIds: positionId,
    },
  });
};
export { useHeroesStatsByPositionQuery };
