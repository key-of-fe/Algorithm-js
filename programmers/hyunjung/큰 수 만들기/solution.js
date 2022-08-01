function solution(number, k) {
  const stack = [number[0]];

  //넣으려는 수가 top보다 크면 이전값 빼고 삽입
  for (let i = 1; i < number.length; i++) {
    let cur = number[i];

    while (k > 0 && stack[stack.length - 1] < cur) {
      stack.pop();
      k--;
    }

    stack.push(cur);
  }
  console.log(stack)

  //k가 남은 경우, 뒤에서부터 k만큼 제거한다.
  return stack.slice(0, stack.length - k).join('');

}