const competitions = [
  ["HTML5", "C#"],
  ["C#", "Python"],
  ["Python", "HTML5"],
];

const score = [0, 0, 1];

const tornamentWinner = (competitions, score) => {
  const resultObj = {};
  let currentBestTeam = competitions[0][1 - score[0]];

  for (let i = 0; i < score.length; i++) {
    if (score[i] === 0) {
      if (resultObj[competitions[i][1]]) {
        resultObj[competitions[i][1]] += 1;
      } else {
        resultObj[competitions[i][1]] = 1;
      }

      if (resultObj[currentBestTeam] < resultObj[competitions[i][1]]) {
        currentBestTeam = [competitions[i][1]];
      }
    } else {
      if (resultObj[competitions[i][0]]) {
        resultObj[competitions[i][0]] += 1;
      } else {
        resultObj[competitions[i][0]] = 1;
      }

      if (resultObj[currentBestTeam] < resultObj[competitions[i][0]]) {
        currentBestTeam = [competitions[i][0]];
      }
    }
  }

  return currentBestTeam;
};

console.log(tornamentWinner(competitions, score));
