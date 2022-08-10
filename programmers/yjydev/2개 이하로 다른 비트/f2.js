// 배열 변환해서 필터하는 것도 마찬가지로 10,11번 테케 실패

function solution(numbers) {
  var answer = [];
  for (n of numbers) {
      var result = n;
      while (true) {
          result += 1;
          var tmp = (n^result).toString(2);
          if ([...tmp].filter(x=> x === '1').length <= 2) {
              answer.push(result);
              break;
          }
      }
  }
  return answer;
}
