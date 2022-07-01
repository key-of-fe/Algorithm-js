function solution(places) {
  let answer = [];

  for (place of places) {
    answer.push(isValid(place));
  }

  return answer;
}

const isValid = place => {
  const roomArr = place.map(room => room.split(''));

  // 상 우 하 좌
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  // queue에 응시자 위치 삽입
  let queue = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (roomArr[r][c] == 'P') {
        queue.push([r, c]);
      }
    }
  }

  // 모든 응시자 위치를 탐색
  while (queue.length > 0) {
    const [r, c] = queue.shift();

    // P 주변 사방탐색
    for (let i = 0; i < 4; i++) {
      let nr = r + dr[i];
      let nc = c + dc[i];

      if (nr < 0 || nc < 0 || nr >= 5 || nc >= 5) // 범위 체크
        continue;
      if (roomArr[nr][nc] == 'X') // 파티션 체크
        continue;
      if (roomArr[nr][nc] == 'P') // 응시자 체크
        return 0;                 // 거리두기 지키지 않음 --> 0 리턴

      // 빈 테이블일 경우, 다시 사방탐색
      for (let i = 0; i < 4; i++) {
        let _nr = nr + dr[i];
        let _nc = nc + dc[i];

        // 범위 체크 및 중복 체크
        if (_nr < 0 || _nc < 0 || _nr >= 5 || _nc >= 5 || (_nr == r && _nc == c))
          continue;
        if (roomArr[_nr][_nc] == 'P') // 응시자 체크
          return 0;                   // 거리두기 지키지 않음 --> 0 리턴
      }
    }
  }

  return 1; // 모든 경우 만족 --> 1 리턴
}