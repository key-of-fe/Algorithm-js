function solution(numbers, target) {
  let answer = 0;

  const dfs = (depth, rst) => {
    if (depth === numbers.length) {
      if (rst === target) answer += 1;
      return;
    }
    dfs(depth + 1, rst + numbers[depth]);
    dfs(depth + 1, rst - numbers[depth]);
  };
  dfs(0, 0);

  return answer;
}
