import { gql } from "@apollo/client";

export const GET_HEROES = gql`
  query Constants {
    constants {
      heroes {
        name
        shortName
        displayName
        id
        aliases
        stats {
          primaryAttribute
        }
      }
    }
  }
`;

export const GET_HEROES_WEEK_STATS = gql`
  query HeroStats($take: Int, $gameModeIds: [GameModeEnumType]) {
    heroStats {
      winDay(take: $take, gameModeIds: $gameModeIds) {
        day
        heroId
        matchCount
        winCount
      }
    }
  }
`;
