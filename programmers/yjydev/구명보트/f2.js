// 정확성 효율성 모두 0점..
// 아마 운좋게 예제만 통과한거고 people 배열의 길이에 따라서 range 변수가 정해지는데 
// for문 안에서 people 을 slice로 조작하고 그래서 범위초과 떴을 것 같긴한다..
// => 2중 포문을 돌면 배열 조작이 자유롭지 못하니까 while문으로 앞뒤를 보는게 더 나을듯

function solution(people, limit) {
  var len = people.length;
  var answer = len%2===1? 1 : 0;
  people = people.sort((a,b) => a-b);
  var range = len%2===1? (len-1)/2 : len/2 -1;
  for (let i = 0; i < range; i++) {
      for (let j = len-1; j > i; j--) {
          if (people[i] + people[j] <= limit) {
              people = people.slice(0,j-1);
              answer += 1;
              break;
          } else {
              answer += 1;
          }
      }
  }
  return answer;
}
