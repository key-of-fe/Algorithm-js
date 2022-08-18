// 문제 조건 중 하나의 구명보트에 2명씩만 탈 수 있다는 걸 못봤었다.

function solution(people, limit) {
  var answer = 1;
  people = people.sort((a,b) => a-b);
  var height = 0;
  for (human of people) {
      if (height+human > limit) {
          height = human;
          answer += 1;
      } else {
          height += human;
      }
  }
  return answer;
}
