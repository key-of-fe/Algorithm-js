function solution(places) {
  let answer = [];

  for (let i = 0; i < 5; i++) {
    const rooms = places[i].map(place => place.split(''));

    let checked = new Boolean(true);
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (rooms[r][c] == 'P') {
          if (!bfs(r, c, rooms)) {
            checked = false;
          }
        }
      }
    }
    answer.push(checked ? 1 : 0);
  }

  return answer;
}

const bfs = (r, c, rooms) => {
  
  //상 우 하 좌
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];
  
  const visited = Array.from(Array(5), _ => new Array(5).fill(false));

  let queue = [];
  queue.push([r, c]);
  // console.log(queue);
  visited[r][c] = true;

  while (queue.length) {
    const [r, c] = queue.shift();
    // console.log(r, c);

    //P 주변 사방탐색
    for (let i = 0; i < 4; i++) {
      let nr = r + dr[i];
      let nc = c + dc[i];

      if (nr < 0 || nc < 0 || nr >= 5 || nc >= 5 || (nr == r && nc == c))
        continue;
      // if (visited[nr][nc] == true || rooms[nr][nc] == 'X') continue;
      // if (rooms[nr][nc] == 'P') return false;

      // queue.push([nr, nc]);
      // visited[nr][nc] = true;

      let dist = Math.abs(nr-r) + Math.abs(nc-c);

      if(rooms[nr][nc] == 'P' && dist <=2) {
        return false;
      }else if(rooms[nr][nc] == 'O' && d<2){
        queue.push([nr, nc]);
      }
    }
  }

  return true;
}