export default function groupHeroesByAttribute(heroes, stats) {
  if (!heroes || !stats || heroes.length === 0 || stats.length === 0) {
    return { str: [], agi: [], int: [], all: [] };
  }

  const result = {
    str: [],
    agi: [],
    int: [],
    all: [],
  };

  const heroesStats = new Map();

  stats.forEach(({ heroId, matchCount, winCount }) => {
    if (heroId === 0) return;

    if (!heroesStats.has(heroId)) {
      heroesStats.set(heroId, {
        matchCount: 0,
        winCount: 0,
      });
    }

    const heroStat = heroesStats.get(heroId);
    heroStat.matchCount += matchCount;
    heroStat.winCount += winCount;
  });

  heroes.forEach((hero) => {
    const heroWithWinrate = heroesStats.get(hero.id) || {
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
}
