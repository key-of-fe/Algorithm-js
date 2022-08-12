// 이번엔 10,11번만 통과
// 짝수이면 무조건 0으로 끝나므로 + 1 한 값이 최소값일 것
// 홀수이면 규칙을 찾았을 때, 01 => 10 으로 바꾸면 다른 곳이 2개인 비트 찾기 가능
// 즉, 짝수이면 비트 1개 다르고 홀수이면 비트 2개 다르게 된다.

function solution(numbers) {
  var answer = [];
  for (n of numbers) {
      if (n % 2 === 0) {
          answer.push(n+1);
      }
      else {
          var bit = n.toString(2);
          var idx = bit.indexOf('01');
          var res = idx === -1 ? '10' + bit.substring(1) 
                      : bit.substring(0, idx) + '10' + bit.substring(idx+2)
          answer.push(parseInt(res,2));
      }
  }
  return answer;
}
