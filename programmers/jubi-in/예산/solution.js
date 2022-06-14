function solution(d, budget) {
  let sum = 0;
  let index = 0;
  d.sort((a, b) => {
    return a - b;
  });

  while (sum <= budget) {
    sum += d[index];
    index++;
  }

  return index - 1;
}
