const positions = ["carry", "mid", "offlane", "softSupport", "hardSupport"];

function getBestWinrateHeroByPosition(data) {
  if (!Array.isArray(data)) {
    console.error(
      `Ошибка: входные данные должны быть массивом,
      полученные данные - ${data}`
    );
    return {};
  }

  const result = {};

  data.forEach((heroesList, index) => {
    if (!Array.isArray(heroesList) || !heroesList || heroesList.length === 0) {
      console.warn(
        `Пустые или некорректные данные для позиции ${positions[index]}.
        data: ${JSON.stringify(heroesList)}
        должно быть массивом героев с длинной массива >= 1.
        `
      );
      result[positions[index]] = null;
      return;
    }

    const step = 10;
    let minMatches = 100;
    let bestHero = findBestHero(heroesList, minMatches);

    while (bestHero === null || minMatches === 0) {
      minMatches -= step;
      bestHero = findBestHero(heroesList, minMatches);
    }

    result[positions[index]] = bestHero;
  });

  return result;
}

function findBestHero(heroesList, minMatches) {
  let bestHero = null;

  for (let hero of heroesList) {
    if (typeof hero !== "object") continue;

    let matchCount = hero.matchCount;
    let winCount = hero.winCount;

    if (matchCount < minMatches || matchCount === 0) continue;

    let heroWinRate = (winCount / matchCount) * 100;

    if (!bestHero || heroWinRate > bestHero.winRate) {
      bestHero = { ...hero, winRate: Number(heroWinRate.toFixed(2)) };
    }
  }

  return bestHero;
}

export { getBestWinrateHeroByPosition };
