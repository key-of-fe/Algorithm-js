function solution(survey, choices) {
  const types = 'RTCFJMAN'.split('');
  const dict = {}
  types.forEach(type => {dict[type] = 0});
  const scores = [null,3,2,1,0,1,2,3];

  choices.forEach((choice, idx) => {
      let target = '';
      if (choice <= 4) {
          target = survey[idx][0];
      } else {
          target = survey[idx][1];
      }
      dict[target] += scores[choice];
  })

  let answer = '';
  for (let i = 0; i < types.length; i += 2) {
      answer += dict[types[i]] >= dict[types[i + 1]] ? types[i] : types[i + 1];
  }
  return answer;
}
