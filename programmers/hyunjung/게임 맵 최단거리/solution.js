function solution(maps) {
  const n = maps.length - 1, m = maps[0].length - 1;
  const dr = [-1, 0, 1, 0], dc = [0, 1, 0, -1];
  let visited = maps.slice();
  let queue = [];

  const bfs = (r, c) => {
    queue.push([r, c, 1]);

    while (queue.length) {
      let [r, c, cnt] = queue.shift();

      //종료 조건
      if (r === n && c === m) {
        return cnt;
      }

      //사방탐색
      for (let i = 0; i < 4; i++) {
        let nr = r + dr[i];
        let nc = c + dc[i];

        if (nr >= 0 && nc >= 0 && nr <= n && nc <= m && visited[nr][nc] === 1) {
          visited[nr][nc] = 0;
          queue.push([nr, nc, cnt + 1]);
        }
      }
    }
    return -1;
  }

  visited[0][0] = 0;
  return bfs(0, 0);
}