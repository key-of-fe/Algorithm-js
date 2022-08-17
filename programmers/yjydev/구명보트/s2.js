function solution(people, limit) {
  var count = 0;
  people = people.sort((a,b) => a-b);
  for (let i = 0, j = people.length; i < j; j--) {
      if (people[i] + people[j] <= limit) {
          i++;
          count++;
      }
  }
  return people.length-count;
}
