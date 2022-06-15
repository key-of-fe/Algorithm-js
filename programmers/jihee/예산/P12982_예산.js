function solution(d, budget) {
    // 오름차순 정렬
    d.sort((a, b) => a - b);
    // 예산 넘는 순간의 부서의 개수 반환
    while (d.reduce((a, b) => (a + b), 0) > budget) {
      d.pop();
    }
    return d.length;
}
