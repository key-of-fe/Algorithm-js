//10, 8, 5, 4, 3회 인용되면 인덱스는 4입니다.
//25, 8, 5, 3, 3번 인용되면 인덱스는 3입니다.
function solution(citations) {
  let answer = 0;

  citations.sort((a, b) => (b - a));
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1)
      answer++;
    else
      break;
  }

  return answer;
}