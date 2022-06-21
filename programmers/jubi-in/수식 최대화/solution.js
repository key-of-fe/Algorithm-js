function solution(expression) {
  var answer = Number.MIN_VALUE;

  // 계산 함수
  const cal = (a, b, op) => {
    if (op === "*") return a * b;
    else if (op === "-") return a - b;
    else return Number(a) + Number(b);
  };

  // 숫자로 된 문자열 1개 이상인 문자열
  const reg1 = /\d+/;
  const reg2 = /[*+-]/;

  let nums = expression.split(reg2);
  let ops = expression.split(reg1);
  // 공백이 하나씩 추가돼서 제거해줌

  ops.pop();
  ops.shift();

  // 우선순위로 나올 수 있는 후보들
  const cands = [
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];

  cands.forEach((cand) => {
    nums = expression.split(reg2);
    ops = expression.split(reg1);
    ops.pop();
    ops.shift();

    cand.forEach((i) => {
      // 해당 연산자가 ops에 없으면 굳이 안 해도 됨
      if (ops.indexOf(i) === -1) {
        return;
      } else {
        let index = ops.indexOf(i);

        // 해당 연산자가 여러개 있을 수도 있으니까 반복문
        while (index !== -1) {
          // nums index 위치에 계산결과 넣고 뒤에꺼는 없애줌
          nums[index] = cal(nums[index], nums[index + 1], i);
          // index + 1부터 1개의 원소 삭제
          nums.splice(index + 1, 1);
          ops.splice(index, 1);
          index = ops.indexOf(i);
        }
      }
    });
    answer = Math.max(Math.abs(nums[0]), answer);
  });
  return answer;
}
