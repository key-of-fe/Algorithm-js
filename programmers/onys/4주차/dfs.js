function range(start, end) {
  let array = [];
  for (let i = start; i < end; ++i) {
    array.push(i);
  }
  return array;
}

const graph =
{
  '1': [ [ 2, 3 ] ],
  '2': [ [ 1, 3 ], [ 3, 5 ], [ 4, 2 ], [ 5, 4 ] ],
  '3': [ [ 2, 5 ], [ 4, 4 ] ],
  '4': [ [ 2, 2 ], [ 3 ], [ 5, 3 ], [ 6, 1 ] ],
  '5': [ [ 2, 4 ], [ 4, 3 ], [ 6, 1 ] ],
  '6': [ [ 4, 1 ], [ 5, 1 ] ]
}
// (graph, 시작 정점)
const dfs = (graph, startNode) => {
  let needVisit = []; // 탐색을 해야 할 노드들
  let visited = []; // 탐색을 마친 노드들

  needVisit.push(startNode);
  let intensity = 0;

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisit.length > 0) {
    const [pos, dist] = needVisit.pop();
    if (!visited.includes(pos)) {
      intensity = Math.max(dist, intensity);
      visited.push(pos);
      console.log(visited);
      needVisit = [...needVisit, ...graph[pos]];
    }
  }

  return {visited, intensity};
};

dfs(graph, [1, 0]);
