function solution(k, dungeons) {
  let answer = 0;
  const visited = Array(dungeons.length).fill(false);

  const dfs = (cnt, k) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (k >= dungeons[i][0] && !visited[i]) {
        visited[i] = true;
        dfs(cnt + 1, k - dungeons[i][1]);
        visited[i] = false;
      }
    }

    answer = Math.max(answer, cnt);
  }

  dfs(0, k);

  return answer;
}