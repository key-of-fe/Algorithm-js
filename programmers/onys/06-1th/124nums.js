function solution(n) {
  if (n === 3) {
    return '4';
  };

  let answer = [];
  let curN = n;

  while (true) {
    const quotient = Math.floor(curN / 3);
    const remainder = curN % 3;
    let adding = remainder;
    let nextN = quotient;

    if (remainder === 0) {
      adding = '4';
      nextN -= 1;
    }
    curN = nextN;
    answer.unshift(adding);
    if (curN < 3) {
      answer.unshift(curN !== 0 ? curN : '');
      break;
    }
  }

  return answer.join('');
}
