function solution(s) {
  s = s.replace(/\{/g, '[');
  s = s.replace(/\}/g, ']');
  let arr = JSON.parse(s)
    .sort((a, b) => a.length - b.length);

  return arr.reduce((acc, cur) => {
    let target = null;
    cur.forEach(num => {
      if (!acc.includes(num)) {
        target = num;
        return;
      }
    });
    return [...acc, target];
  }, []);
}
