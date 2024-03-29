// s2 + 약간의 백트래킹?

function solution(k, dungeons) {
  var answer = 0;
  const len = dungeons.length;
  var visited = Array.from({length: len}, v => 0);
  function dfs(k, cnt) {
      answer = Math.max(cnt, answer);
      if (answer === len) return;
      for (let i = 0; i < len; i++) {
          if (!visited[i] && dungeons[i][0] <= k) {
              visited[i] = 1;
              dfs(k-dungeons[i][1], cnt+1);
              visited[i] = 0;
          }
      }
  }
  dfs(k, 0);
  return answer;
}
