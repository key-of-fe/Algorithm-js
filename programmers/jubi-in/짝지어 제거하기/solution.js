function solution(s) {
  let now = [];

  for (let i = 0; i < s.length; i++) {
    if ((now.length !== 0) & (now[now.length - 1] === s[i])) now.pop();
    else now.push(s[i]);
  }

  return now.length === 0 ? 1 : 0;
}
