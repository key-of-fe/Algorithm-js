function solution(numbers) {
  const answer = new Set();
  let picks = [];
  let isSelected = Array(numbers.length).fill(false);
  const pick = (start, cnt) => {
    if (cnt === 2) {
      answer.add(picks[0] + picks[1]);
      return;
    }
    for (let i = start; i < numbers.length; i++) {
      if (isSelected[i]) continue;
      picks.push(numbers[i]);
      isSelected[i] = true;
      pick(i, cnt + 1);
      isSelected[i] = false;
      picks.pop(numbers[i]);
    }
  };

  pick(0, 0);

  let result = [...answer].sort((a, b) => {
    return a - b;
  });

  return result;
}
