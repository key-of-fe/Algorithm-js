function solution(nums) {
  const setNums = [...new Set(nums)];
  const half = parseInt(nums.length / 2);
  return half > setNums.length ? setNums.length : half;
}
