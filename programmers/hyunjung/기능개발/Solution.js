function solution(progresses, speeds) {
  let answer = [0];
  const remains = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
  let max = remains[0];

  let index = 0;
  for (let i = 0; i < remains.length; i++) {
    if (remains[i] <= max) {
      answer[index] += 1;
    } else {
      max = remains[i];
      index++;
      answer[index] = 1;
    }
  }

  return answer;
}