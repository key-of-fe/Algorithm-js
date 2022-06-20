function solution(rows, columns, queries) {
  var answer = [];

  // Array(rows).fill()로 이미 undefined로 채워져 있음. 그래서 map 돌아서 다시 값을 대입해 줌
  const board = Array(rows)
    .fill()
    .map((row, i) =>
      Array(columns)
        .fill()
        .map((column, j) => i * columns + j + 1)
    );

  const rotate = (query) => {
    // 비구조화 할당으로 어차피 4개밖에 안되니까 하나씩 제거 (index)
    let [x1, y1, x2, y2] = query;
    x1--, y1--, x2--, y2--;

    const temp = board[x1][y1];
    const queue = [temp];

    for (let i = x1; i < x2; i++) {
      queue.push((board[i][y1] = board[i + 1][y1]));
    }
    for (let j = y1; j < y2; j++) {
      queue.push((board[x2][j] = board[x2][j + 1]));
    }
    for (let i = x2; i > x1; i--) {
      queue.push((board[i][y2] = board[i - 1][y2]));
    }
    for (let j = y2; j > y1; j--) {
      queue.push((board[x1][j] = board[x1][j - 1]));
    }

    board[x1][y1 + 1] = temp;

    // Math.min spread operator
    return Math.min(...queue);
  };

  // queries를 돌면서 최소값이 리턴되면 다시 ans에 하나씩 넣어준다 -> reduce 사용
  answer = queries.reduce((ans, query) => {
    ans.push(rotate(query));
    return ans;
  }, []);

  return answer;
}
