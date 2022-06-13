function solution(progresses, speeds) {
  let answer = [];
  let days = [];
  let count = 0;
  let long = 0;

  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  long = days[0];

  days.forEach((day) => {
    if (long < day) {
      answer.push(count);
      long = day;
      count = 0;
    }
    count++;
  });
  answer.push(count);

  return answer;
}
