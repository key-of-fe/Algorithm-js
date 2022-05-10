function solution(absolutes, signs) {
  const table = { true: 1, false: -1 };
  let answer = 0;
  
  for (let i = 0; i < absolutes.length; i++) {
      answer += absolutes[i] * table[signs[i]]
  }
  return answer;
}
