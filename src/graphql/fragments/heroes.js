import { gql } from "@apollo/client";

/**
 * Фрагмент для данных героя.
 * Используется для запросов, связанных с сущностью `heroes` .
 * Тип данных: `HeroType`.
 */
export const HERO_FRAGMENT = gql`
  fragment HeroDetails on HeroType {
    id
    displayName
    shortName
  }
`;
