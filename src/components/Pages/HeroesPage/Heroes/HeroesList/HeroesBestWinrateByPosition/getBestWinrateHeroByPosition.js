const MIN_MATCHES = 2000;
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
        должно быть массивом героев.
        `
      );
      result[positions[index]] = null;
      return;
    }

    let bestHero = null;

    for (let hero of heroesList) {
      if (hero?.matchCount < MIN_MATCHES) continue;

      let heroWinRate = (hero.winCount / hero.matchCount) * 100;
      const formattedWinrate = Number(heroWinRate.toFixed(2));
      if (!bestHero || heroWinRate > bestHero.winRate) {
        bestHero = { ...hero, winRate: formattedWinrate };
      }
    }

    result[positions[index]] = bestHero;
  });

  return result;
}

export { getBestWinrateHeroByPosition };
