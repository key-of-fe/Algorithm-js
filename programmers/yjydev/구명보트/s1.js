function solution(people, limit) {
  var answer = 0;
  people = people.sort((a,b) => a-b);
  var start = 0;
  var end = people.length-1;
  while (start < end) {
      if (people[start] + people[end] <= limit) {
          start += 1;
          end -= 1;
          answer += 1;
      } else {
          end -= 1;
          answer += 1;
      }
  }
  if (start === end) answer += 1;
  return answer;
}
