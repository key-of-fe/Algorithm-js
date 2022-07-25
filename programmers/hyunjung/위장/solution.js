function solution(clothes) {
  const map = new Map();

  for (let [val, key] of clothes) {
    if (map.has(key)) //값이 있으면
      map.set(key, map.get(key) + 1); //더해주고
    else //없으면
      map.set(key, 1); //초기값 1로 설정
  }

  let answer = 1;
  for (let val of map.values()) {
    answer *= (val + 1); //입지 않는 경우도 더해줌
  }

  return answer - 1; //모두 입지 않는 경우를 빼줌
}