function solution(line) {
  let answer = [] //좌표와 교점을 그림으로 나타낼 배열
  let stars = []; //교점(정수인 겹치는 별 좌표) 배열

  // 1. 정수인 겹치는 별 좌표 찾기
  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];

      if (a * d - b * c === 0) continue; //평행, 일치 제외

      const x = (b * f - e * d) / (a * d - b * c);
      const y = (e * c - a * f) / (a * d - b * c);
      //정수 좌표만 추가
      if (Number.isInteger(x) && Number.isInteger(y))
        stars.push([x, y]);
    }
  }

  // 2. 별 좌표 중 최대, 최소값 찾기
  stars.sort((a, b) => b[0] - a[0]);
  let maxX = stars[0][0];
  let minX = stars[stars.length - 1][0];

  stars.sort((a, b) => b[1] - a[1]);
  let maxY = stars[0][1];
  let minY = stars[stars.length - 1][1];

  // 3. 모든 별을 포함하는 최소한의 격자판 (.) 생성
  for (let i = 0; i <= maxY - minY; i++) {
    let tmp = [];
    for (let j = 0; j <= maxX - minX; j++) {
      tmp.push('.');
    }
    answer.push(tmp);
  }
  // answer = Array.from(Array(maxY-minY+1), () => Array(maxX-minX+1).fill('.'));

  // 4. 별 좌표 (*) 변경
  for (const star of stars) {
    answer[maxY - star[1]][star[0] - minX] = '*';
  }


  return answer.map(el => el.join(''));
}