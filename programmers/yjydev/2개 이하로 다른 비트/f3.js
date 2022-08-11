// 역시나 10,11번 테케 실패

function solution(numbers) {
  var answer = [];
  for (n of numbers) {
      var result = n;
      while (true) {
          result += 1;
          var tmp = (n^result).toString(2);
          var len = [...tmp].filter(x=> x === '1').length
          if (len && len <= 2) {
              answer.push(result);
              break;
          }
      }
  }
  return answer;
}
