function solution(answers) {
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < 3; j++) {
      const student = students[j];
      scores[j] += student[i % student.length] === answers[i] ? 1 : 0;
    }
  }

  const maxScore = Math.max(...scores);
  const ans = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      ans.push(i + 1);
    }
  }

  return ans;
}
