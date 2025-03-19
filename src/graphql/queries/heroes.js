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

export const GET_HEROES_WEEK_STATS_BY_POSITION = gql`
  query WinDay(
    $positionIds: [MatchPlayerPositionType]
    $take: Int
    $gameModeIds: [GameModeEnumType]
  ) {
    heroStats {
      winDay(
        positionIds: $positionIds
        take: $take
        gameModeIds: $gameModeIds
      ) {
        winCount
        matchCount
        heroId
      }
    }
  }
`;
