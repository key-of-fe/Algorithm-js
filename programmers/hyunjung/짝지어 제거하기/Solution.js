function solution(s) {
  const st = [];

  for (let i = 0; i < s.length; i++) {
    if (!st.length || st[st.length - 1] !== s[i]) {
      st.push(s[i]);
    } else {
      st.pop();
    }
  }

  return st.length ? 0 : 1;
}