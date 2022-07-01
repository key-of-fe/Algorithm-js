function solution(s) {
  s = s.replace(/\{/g, '[');
  s = s.replace(/\}/g, ']');
  let arr = JSON.parse(s);
  arr.sort((a, b) => a.length - b.length);

  const visited = [];
  arr.forEach(ele => {
    ele.forEach(num => {
      if (!visited.includes(num)) {
        visited.push(num);
      }
    });
  });

  return visited;
}
