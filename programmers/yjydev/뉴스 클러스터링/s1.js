function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  function check(str) {
      const result = []
      for (let i = 0; i < str.length -1; i++) {
          const text = str.substr(i,2);
          if (text.match(/[A-Z]{2}/)) {
              result.push(text);
          }
      }
      return result;
  }
  const arr1 = check(str1);
  const arr2 = check(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let inter = 0;
  set.forEach(s => {
      const has1 = arr1.filter(x => x === s).length;
      const has2 = arr2.filter(x => x === s).length;
      union += Math.max(has1, has2);
      inter += Math.min(has1, has2);
  })
  
  return union === 0 ? 65536 : Math.floor(inter / union * 65536);
}