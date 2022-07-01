const calculate = (a, b, operator) => {
  if (operator === '+') {
    return a + b;
  } else if (operator === '-') {
    return a - b;
  } else {
    return a * b;
  }
};

function solution(expression) {
  // 우선순위 만들기
  const priorities = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['*', '+', '-'],
    ['*', '-', '+'],
  ];

  let maxResult = 0;

  priorities.forEach(priority => {
    // 피연산자, 연산자 분리
    let operands = expression.match(/[0-9]+/g).map(Number);
    let operators = expression.match(/[\+,\-,*]/g);

    // 우선순위별로 계산
    priority.forEach(operator => {
      let idx = 1;
      while (idx) {
        idx = operators.indexOf(operator);
        if (idx === -1) break;
        const result = calculate(operands[idx], operands[idx + 1], operator);
        operands.splice(idx, 2, result);
        operators.splice(idx, 1);
        idx = operators.indexOf(operator, idx + 1);
      }
    });

    // 최대값 갱신
    maxResult = Math.max(Math.abs(maxResult), Math.abs(operands[0]));
  });

  return maxResult;
}
