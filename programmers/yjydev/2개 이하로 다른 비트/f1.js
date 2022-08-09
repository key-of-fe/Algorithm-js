// 테케 10, 11번 실패
// 비트연산자 XOR(^) 는 각 자리수의 비트가 같으면 0, 다르면 1을 
// 출력하니까 연산한 다음에 정규식으로 1의 개수 세주는 방식으로 풀었음

function solution(numbers) {
  var answer = [];
  for (n of numbers) {
      var result = n;
      while (true) {
          result += 1;
          var tmp = (n^result).toString(2);
          // console.log(n.toString(2),result.toString(2))
          // console.log(tmp, tmp.match(/1/g).length)
          if (tmp.match(/1/g).length <= 2) {
              answer.push(result);
              break;
          }
      }
  }
  return answer;
}
