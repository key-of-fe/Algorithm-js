function solution(numbers, target) {
  let ans = 0;
  const signs = Array.from({ length: numbers.length }, () => 0);
  function DFS(s) {
    if (s === signs.length) {
      let total = 0;
      for (let i = 0; i < numbers.length; i++) {
        if (signs[i]) {
          total += numbers[i];
        } else {
          total -= numbers[i];
        }
      }
      if (total === target) {
        ans++;
      }
      return;
    }
    DFS(s + 1);
    signs[s] = 1;
    DFS(s + 1);
    signs[s] = 0;
  }
  DFS(0);
  return ans;
}
