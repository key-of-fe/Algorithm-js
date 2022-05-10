function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    const sliceArr = array.slice(commands[i][0] - 1, commands[i][1]);
    const sortedArr = sliceArr.sort((a, b) => a - b);
    answer.push(sortedArr[commands[i][2] - 1]);
  }
  return answer;
}
