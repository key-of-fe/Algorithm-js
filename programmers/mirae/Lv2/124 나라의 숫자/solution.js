function solution(n) {
  let answer = "";
  let change = ["4", "1", "2"];

  while (n > 0) {
    answer = change[n % 3] + answer;
    if (n % 3 === 0) n -= 1;
    n = Math.floor(n / 3);
  }

  return answer;
}
