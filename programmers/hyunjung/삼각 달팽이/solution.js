function solution(n) {
  const answer = [], triArr = [];

  //삼각형 배열 만들기.
  for (let i = 1; i <= n; i++) {
    triArr.push(new Array(i).fill(0));
  }

  let row = -1, col = 0, num = 1;

  //반시계 방향으로 n번 회전한다.
  //(n, n-1, n-2... 1)으로 채워짐.
  //3방향이(위->아래, 왼->오, 아래->위 대각선) 반복됨.
  for (let i = n; i > 0; i -= 3) {
    for (let j = 0; j < i; j++) {
      triArr[++row][col] = num++;
    } //위->아래

    for (let j = 0; j < i - 1; j++) {
      triArr[row][++col] = num++;
    } //왼->오

    for (let j = 0; j < i - 2; j++) {
      triArr[--row][--col] = num++;
    } //아래->위 대각선
  }

  //정답 형식으로 바꾸기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      answer.push(triArr[i][j]);
    }
  }

  return answer;
  //return answer.flat();
}