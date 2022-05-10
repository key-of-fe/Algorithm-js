function solution(a, b) {
  var answer = Object.keys(a).reduce((result, key) => {
    return result + a[key] * b[key];
  }, 0);
  return answer;
}
