//틀림(테케1 통과X)
function solution(rows, columns, queries) {
  const arr = [];
  let cnt = 1;

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < columns; c++) {
      row.push(cnt++);
    }
    arr.push(row);
  }

  const answer = [];
  const min = (a, b) => a > b ? b : a;

  for (let tc = 0; tc < queries.length; tc++) {
    let [x1, y1, x2, y2] = queries[tc];
    x1--, y1--, x2--, y2--;
    const tmp = arr[x1][y1];
    let minNum = tmp;

    for (let i = x1; i < x2; i++) {
      arr[i][y1] = arr[i + 1][y1];
      minNum = min(arr[i + 1][y1], minNum);
    }

    for (let i = y1; i < y2; i++) {
      arr[x2][i] = arr[x2][i + 1];
      minNum = min(arr[x2][i + 1], minNum);
    }

    for (let i = x2; i > x1; i--) {
      arr[i][y2] = arr[i - 1][y2];
      minNum = min(arr[i - 1][y2], minNum);
    }

    for (let i = y2; i > y1; i--) {
      arr[x1][i] = arr[x1][i - 1];
      minNum = min(arr[x2][i - 1], minNum);
    }

    arr[x1][y1 + 1] = tmp;
    answer.push(minNum);
  }
  return answer;
}