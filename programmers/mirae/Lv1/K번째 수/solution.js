function solution(array, commands) {
  let answer = [];

  for (let command of commands) {
    let tmpArr = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);

    answer.push(tmpArr[command[2] - 1]);
  }

  return answer;
}
