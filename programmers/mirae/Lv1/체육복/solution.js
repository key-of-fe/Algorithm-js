function solution(n, lost, reserve) {
  let lowNum,
    highNum = 0;
  let index = 0;

  for (let i = 0; i < lost.length; i++) {
    if ((index = reserve.indexOf(lost[i])) >= 0) {
      lost[i] = 0;
      reserve[index] = 0;
    }
  }

  for (let i = 0; i < lost.length; i++) {
    if (lost[i] === 0) continue;
    lowNum = lost[i] - 1;
    highNum = lost[i] + 1;

    if (lowNum > 0 && (index = reserve.indexOf(lowNum)) >= 0) {
      reserve[index] = 0;
    } else if (highNum <= n && (index = reserve.indexOf(highNum)) >= 0) {
      reserve[index] = 0;
    } else {
      n--;
    }
  }

  return n;
}
