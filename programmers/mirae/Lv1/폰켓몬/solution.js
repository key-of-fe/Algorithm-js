function solution(nums) {
  let copy = [...new Set(nums)];
  return copy.length < nums.length / 2 ? copy.length : nums.length / 2;
}
