function solution(progresses, speeds) {
  const count = [];
  for (let i = 0; i < progresses.length; i++) {
    count.push(0);
    while (progresses[i] < 100) {
      progresses[i] += speeds[i];
      count[i]++;
    }
  }

  const answer = [];
  answer.push(1);

  for (let i = 1; i < count.length; i++) {
    if (count[i] <= count[i - 1]) {
      answer[answer.length - 1]++;
      count[i] = count[i - 1];
    } else answer.push(1);
  }

  return answer;
}
