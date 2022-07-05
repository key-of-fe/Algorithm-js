function solution(numbers, target) {
  let cnt = 0;

  calculate(numbers, target, 0, 0);

  // numbers 0인덱스부터 마지막 인덱스까지 계산해보는 재귀함수
  function calculate(numbers, target, idx, calRes) {
    // numbers 끝까지 계산했다면 target과 일치하는지 확인
    if (idx === numbers.length) {
      if (calRes === target) cnt++;
      return;
    }

    // idx 인덱스의 숫자 더하기
    calculate(numbers, target, idx + 1, calRes + numbers[idx]);
    // idx 인덱스의 숫자 빼기
    calculate(numbers, target, idx + 1, calRes - numbers[idx]);
  }

  return cnt;
}
