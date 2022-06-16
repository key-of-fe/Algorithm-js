function solution(answers) {
  const result = [];
  
  const pattern1 = [ 1, 2, 3, 4, 5];
  const pattern2 = [ 2 , 1, 2, 3, 2, 4, 2, 5 ];
  const pattern3 = [ 2, 1, 2, 3, 2, 4, 2, 5 ];
  const patterns = [ pattern1, pattern2, pattern3 ];

  const scores = [];
  
  patterns.forEach((pattern) => {
    scores.push(answers.filter((a,i) => a === pattern[i % pattern.length]).length);
})
  
  const max = Math.max(scores[0], scores[1], scores[2]);

  scores.forEach((score) => {
    if(score == max) {
      result.push(scores.indexOf(score)+1);
    }
  });

  return result;
}
