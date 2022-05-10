let answer = 0;
function solution(nums) {
  let results = [];
  let isSelected = Array(nums.length).fill(false);
  pick(nums, 0, 0, results, isSelected);
  return answer;
}

const pick = (nums, start, cnt, results, isSelected) => {
  if (cnt === 3) {
    const num = results.reduce((acc, i) => {
      return acc + i;
    });
    console.log(num);
    if (check(num)) {
      answer++;
    }
    return;
  }

  for (let i = start; i < nums.length; i++) {
    if (isSelected[i]) continue;
    results.push(nums[i]);
    isSelected[i] = true;
    pick(nums, i, cnt + 1, results, isSelected);
    isSelected[i] = false;
    results.pop(nums[i]);
  }
};

const check = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};
