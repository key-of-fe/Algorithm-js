function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution(w, h) {
  return w * h - (w + h - gcd(Math.max(w, h), Math.min(w, h)));
}
