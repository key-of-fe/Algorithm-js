function solution(numbers) {
  var answer = numbers.reduce((prev, cur) => prev + cur, 0);
  return 45 - answer;
}
