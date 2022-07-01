const range = (start, end) => {
  return [...Array(end - start).keys()].map(key => key + start);
}

const bfs = (start, field) => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [start];
  const visited = [];

  while (queue.length) {
    // console.log(`queue: ${queue}`);
    const [r, c, depth] = queue.shift();
    visited.push(JSON.stringify([r, c]));
    // console.log(`visited: ${visited}`);
    if (depth !== 0 && field[r][c] === 'P') {
      // console.log(`depth is ${depth} ${r},${c} is P! return 0`);
      return 0;
    };
    if (depth >= 2) return 1;

    for (let i = 0; i < 4; i++) {
      const nc = c + dx[i];
      const nr = r + dy[i];
      if (
        range(0, 5).includes(nc)
        && range(0, 5).includes(nr)
        && field[nr][nc] !== 'X'
        && !visited.includes(JSON.stringify([nr, nc]))
      ) {
        queue.push([nr, nc, depth + 1]);
      }
    }
  }
  return 1;
};


function solution(places) {
  return places.map(place => {
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (place[r][c] === 'P') {
          if (bfs([r, c, 0], place) === 0) {
            return 0;
          };
        }
      }
    }
    // console.log('----------------');
    return 1;
  });
}