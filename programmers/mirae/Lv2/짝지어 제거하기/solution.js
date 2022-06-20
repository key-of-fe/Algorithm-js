function solution(s) {
  let stack = [];
  let i = 0;

  // s문자열 끝까지 모두 순회할 때까지 수행
  while (i < s.length) {
    // 이전 문자열과 현재 문자열이 같으면 짝지어 제거됨
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      // 바로 짝지어 제거할 수 없는 경우 또는 스택이 비어있는 경우
      stack.push(s[i]);
    }
    i++;
  }

  // 문자열 끝까지 확인했을 때 스택이 비어있으면 성공적으로 수행
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}
