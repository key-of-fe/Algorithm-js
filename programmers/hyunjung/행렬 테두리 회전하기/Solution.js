function solution(rows, columns, queries) {
  const arr = [];
  let cnt = 1;

  //배열 입력
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < columns; c++) {
      row.push(cnt++);
    }
    arr.push(row);
  }

  const answer = [];

  for (let tc = 0; tc < queries.length; tc++) {
    let [x1, y1, x2, y2] = queries[tc];
    x1--, y1--, x2--, y2--;

    //시작점 값을 기억해놓고 나중에 다음 칸에 추가
    const tmp = arr[x1][y1];
    let min = tmp;

    for (let i = x1; i < x2; i++) {
      arr[i][y1] = arr[i + 1][y1];
      min = Math.min(arr[i + 1][y1], min);
    }

    for (let i = y1; i < y2; i++) {
      arr[x2][i] = arr[x2][i + 1];
      min = Math.min(arr[x2][i + 1], min);
    }

    for (let i = x2; i > x1; i--) {
      arr[i][y2] = arr[i - 1][y2];
      min = Math.min(arr[i - 1][y2], min);
    }

    for (let i = y2; i > y1; i--) {
      arr[x1][i] = arr[x1][i - 1];
      min = Math.min(arr[x1][i - 1], min);
    }

    arr[x1][y1 + 1] = tmp;
    answer.push(min);
  }
  return answer;
}