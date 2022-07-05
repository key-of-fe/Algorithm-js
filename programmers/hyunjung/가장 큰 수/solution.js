function solution(numbers) {
  //배열 원소 문자로 변경
  const arr = numbers.map((cur) => {
    return String(cur);
  })

  // 6, 10 비교하여 내림차순 정렬 --> 10, 6으로 정렬 (X)
  // 두 수를 합한 뒤 내림차순 정렬 --> 610, 106으로 정렬 (O)
  // 배열 내림차순으로 정렬 후, 하나의 문자열로 합침
  const result = arr.sort((a, b) => {
    return parseInt(b + a) - parseInt(a + b)
  }).join('');

  //method chaining
  //const result = numbers.map(cur => String(cur)).sort((a,b) => parseInt(b+a)-parseInt(a+b)).join('');


  //배열 원소가 모두 0일 경우, 예외처리
  //문자열[0] --> 문자열의 제일 첫번째 문자가 반환됨
  return result[0] === '0' ? '0' : result;
}