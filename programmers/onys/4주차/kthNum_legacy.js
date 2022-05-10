function solution(array, commands) {
  let result;

  result = commands.map(command => {
    const newArray = array.slice(command[0]-1, command[1]).sort((a,b) => a-b);
    return newArray[command[2]-1];
  });

  return result;
}
