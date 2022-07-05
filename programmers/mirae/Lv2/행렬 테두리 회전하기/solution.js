function solution(rows, columns, queries) {
  const answer = [];
  const arr = [];
  let num = 1;

  // 회전시킬 배열 만들기
  for (let r = 0; r < rows; r++) {
    let arrCol = [];
    for (let c = 0; c < columns; c++) {
      arrCol.push(num++);
    }
    arr.push(arrCol);
  }

  // 회전 수행하면서 최솟값 받아오기
  for (let i = 0; i < queries.length; i++) {
    answer.push(
      rotate(
        arr,
        queries[i][0] - 1,
        queries[i][1] - 1,
        queries[i][2] - 1,
        queries[i][3] - 1
      )
    );
  }

  return answer;
}

// 회전 수행
function rotate(arr, x1, y1, x2, y2) {
  let tmp = arr[x1][y1];
  let minNum = tmp;

  for (let r = x1; r < x2; r++) {
    arr[r][y1] = arr[r + 1][y1];
    minNum = Math.min(minNum, arr[r + 1][y1]);
  }

  for (let c = y1; c < y2; c++) {
    arr[x2][c] = arr[x2][c + 1];
    minNum = Math.min(minNum, arr[x2][c + 1]);
  }

  for (let r = x2; r > x1; r--) {
    arr[r][y2] = arr[r - 1][y2];
    minNum = Math.min(minNum, arr[r - 1][y2]);
  }

  for (let c = y2; c > y1; c--) {
    arr[x1][c] = arr[x1][c - 1];
    minNum = Math.min(minNum, arr[x1][c - 1]);
  }

  arr[x1][y1 + 1] = tmp;
  return minNum;
}
