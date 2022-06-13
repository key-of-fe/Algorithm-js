function solution(answers) {
  let result = [];
  let maxScore = 0;

  const picks = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < picks.length; i++) {
    let score = checkScore(picks[i], answers);

    // 점수가 더 높은 사람이 있으면 그 사람만 저장
    if (score > maxScore) {
      result = [i + 1];
      maxScore = score;
      continue;
    }

    // 점수가 현재까지의 최고점수와 같으면 push
    if (score === maxScore) result.push(i + 1);
  }

  return result;
}

// 각 수포자의 점수를 구하는 함수
function checkScore(pick, answers) {
  let score = 0;

  for (let i = 0; i < answers.length; i++) {
    if (pick[i % pick.length] === answers[i]) score++;
  }

  return score;
}
