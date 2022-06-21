const range = (start = 0, end) => {
  return [...Array(end - start).keys()].map(key => key + start);
}

function solution(rows, columns, queries) {
  const answer = [];

  // 2차원 배열 만들기
  const graph = [Array(columns + 1).fill(0)];
  for (let i = 0; i < rows; i++) {
    graph.push([0, ...range((1 + columns * i), 1 + (columns * (i + 1)))]);
  }

  // 회전시키기
  const turn = (arr) => {
    const queue = [];
    // 시계방향 순회
    let [r1, c1, r2, c2] = arr;
    for (let i = c1; i < c2; i++) queue.push(graph[r1][i]);
    for (let i = r1; i < r2; i++) queue.push(graph[i][c2]);
    for (let i = c2; i > c1; i--) queue.push(graph[r2][i]);
    for (let i = r2; i > r1; i--) queue.push(graph[i][c1]);
    // 맨뒤에 것을 앞으로 추가
    queue.unshift(queue.pop());
    // 회전된 것중 min값 추가하기
    answer.push(Math.min(...queue));
    // replace
    for (let i = c1; i < c2; i++) graph[r1][i] = queue.shift();
    for (let i = r1; i < r2; i++) graph[i][c2] = queue.shift();
    for (let i = c2; i > c1; i--) graph[r2][i] = queue.shift();
    for (let i = r2; i > r1; i--) graph[i][c1] = queue.shift();
  }

  queries.forEach((query) => turn(query));

  return answer;
}
