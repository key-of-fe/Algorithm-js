// 완탐
function solution(numbers, target) {
    let answer = 0;
  // depth를 cnt로 놓고 풀었다.
    function dfs(cnt, sum) {
    if (cnt === numbers.length) { // depth에 도달했을 때 체크
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(cnt + 1, sum + numbers[cnt]); // 왼쪽
    dfs(cnt + 1, sum - numbers[cnt]); // 오른쪽
  }
    dfs(0, 0);
    return answer;
}
