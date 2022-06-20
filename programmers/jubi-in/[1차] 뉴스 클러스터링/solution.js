function solution(str1, str2) {
  var answer = 0;
  let a = [];
  let b = [];

  const sliceStr = (str, arr) => {
    for (let i = 0; i < str.length - 1; i++) {
      let reg = /^[a-zA-Z]+$/;
      let temp = str.slice(i, i + 2);
      if (reg.test(temp)) arr.push(temp.toLowerCase());
    }
  };

  sliceStr(str1, a);
  sliceStr(str2, b);

  const set = new Set([...a, ...b]);
  let union = 0;
  let intersection = 0;

  // 둘 다 있으면 합에도 넣고 교에도 넣고
  // 하나만 있으면 합에만 넣어야 됨
  set.forEach((item) => {
    const has1 = a.filter((x) => x === item).length;
    const has2 = b.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
