function solution(s) {
  let workingS = s.split('');
  let i = 0;
  while (i < workingS.length) {
    if (i === 0) {
      i++;
      continue;
    }
    if (workingS[i] === workingS[i - 1]) {
      workingS.splice(i - 1, 2);
      i -= 1;
    } else {
      i += 1;
    }
  }
  return workingS.length ? 0 : 1;
}
