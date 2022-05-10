function solution(a, b) {
  let temp = [];
  
  for(let i = 0; i < a.length; i++) {
      temp.push(a[i]*b[i]);
  }
  
  return temp.reduce((acc, cur) => acc+cur, 0);
}
