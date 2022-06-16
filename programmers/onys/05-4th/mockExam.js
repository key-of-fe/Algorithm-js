function solution(answers) {
  const scores = {'1': 0, '2': 0, '3': 0};
  const patterns = [
      [1,2,3,4,5],
      [2,1,2,3,2,4,2,5],
      [3,3,1,1,2,2,4,4,5,5]
  ];
  
  patterns.forEach((pattern, idx) => {
      for (let i = 0; i < answers.length; i++) {
          const patternIdx = i % pattern.length;
          if (pattern[patternIdx] === answers[i]) {
              scores[idx+1] += 1;
          }
      }
  })
  
  const maxScore = Math.max(...Object.values(scores));
  const answer = Object.entries(scores).reduce((cur, acc, idx, src) => {
      const [person, score] = src[idx];
      if (score*1 === maxScore) {
          return [...cur, person*1];
      }
      return cur;
  }, [0]);
  
  return answer.splice(1);
}
