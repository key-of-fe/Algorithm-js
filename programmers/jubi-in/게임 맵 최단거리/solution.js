function solution(maps) {
    var answer = Number.MAX_VALUE;

    let queue = [];
    let isVisited = Array.from(Array(maps.length), () =>
        Array(maps[0].length).fill(false)
    );

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    queue.push([0, 0, 1]);
    let now = [];
    let r = 0,
        c = 0,
        nr = 0,
        nc = 0,
        cnt = 1;

    while (queue.length > 0) {
        now = queue.shift();
        r = now[0];
        c = now[1];
        cnt = now[2];

        if (r === maps.length - 1 && c === maps[0].length - 1) {
            answer = Math.min(answer, cnt);
        }

        for (let i = 0; i < 4; i++) {
            nr = r + dr[i];
            nc = c + dc[i];

            if (
                nr >= 0 &&
                nr < maps.length &&
                nc >= 0 &&
                nc < maps[0].length &&
                maps[nr][nc] !== 0 &&
                isVisited[nr][nc] === false
            ) {
                isVisited[nr][nc] = true;
                queue.push([nr, nc, cnt + 1]);
            }
        }
    }
    return answer === Number.MAX_VALUE ? -1 : answer;
}
