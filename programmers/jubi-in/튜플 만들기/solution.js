function solution(s) {
  var answer = [];
  s = s.slice(2);
  s = s.slice(0, -2);
  let arr = s.split("},{");

  arr = arr.map((a) => {
    return a.split(",");
  });

  let cnt = 1;
  while (answer.length < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === cnt) {
        for (let j = 0; j < arr[i].length; j++) {
          if (answer.indexOf(Number(arr[i][j])) === -1) {
            answer.push(Number(arr[i][j]));
            break;
          }
        }
        cnt++;
        break;
      }
    }
  }
  return answer;
}
