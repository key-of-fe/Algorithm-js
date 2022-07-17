function solution(n, lost, reserve) {
  // 5 [5, 3] [4, 2] 케이스 통과할 수 있도록 정렬 필요
  reserve = reserve.sort((a, b) => a - b);

  // 중복 제거
  for (const l of lost) {
    if (reserve.includes(l)) {
      lost = lost.filter((v) => v !== l);
      reserve = reserve.filter((v) => v !== l);
    }
  }

  // 여벌이 있다면 빌려주기
  for (const r of reserve) {
    if (lost.includes(r - 1)) {
      lost = lost.filter((v) => v !== r - 1);
    } else if (lost.includes(r + 1)) {
      lost = lost.filter((v) => v !== r + 1);
    }
  }

  return n - lost.length;
}
