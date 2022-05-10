function solution(nums) {
  let size = nums.length;
  let count = 0;

  // 조합: 몇 개 뽑을지가 정해져 있기 때문에(3개) 반복문을 이용
  for (let i = 0; i < size - 2; i++) {
    for (let j = i + 1; j < size - 1; j++) {
      for (let k = j + 1; k < size; k++) {
        // 주어진 숫자에서 뽑은 3개의 숫자를 모두 더함
        let sum = nums[i] + nums[j] + nums[k];
        let isPrime = true;

        // 2부터 sum의 제곱근까지 나누어지는 수가 있는지 확인하여 소수 판별
        for (let n = 2; n <= Math.sqrt(sum); n++) {
          if (sum % n === 0) {
            isPrime = false;
            break;
          }
        }

        // 어떤 숫자로도 나누어지지 않는다면 소수이므로 개수 카운트
        if (isPrime) count++;
      }
    }
  }

  return count;
}
