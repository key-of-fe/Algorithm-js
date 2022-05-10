function solution(array, commands) {
  return commands.map(command => {
      const [start, end, target] = command;
      const sliced = array.slice(start - 1, end);
      const sorted = sliced.sort();
      return sorted[target - 1];
  })
}
