function solution(name) {
  let answer = 0;
  let min = name.length;

  //상하 조작
  const upDown = val => {
    const tmp1 = Math.abs('A'.charCodeAt(0) - val.charCodeAt(0));
    const tmp2 = Math.abs('Z'.charCodeAt(0) - val.charCodeAt(0) + 1);
    return Math.min(tmp1, tmp2);
  }

  //name 탐색
  for (let i = 0; i < name.length; i++) {
    const tmp = name.charAt(i);

    // answer += upDown(tmp);
    answer += Math.min(tmp.charCodeAt(0) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - tmp.charCodeAt(0) + 1);

    let nextIndex = i + 1;
    //연속된 A의 다음 인덱스
    while (nextIndex < name.length && name.charAt(nextIndex) === 'A')
      nextIndex++;

    min = Math.min(min, (i * 2) + name.length - nextIndex);

    // BBBBAAAAAAABB인 경우, 처음부터 뒤로 가는 것이 최소
    min = Math.min(min, (name.length - nextIndex) * 2 + i);
  }

  return answer + min;
}