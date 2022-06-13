function solution(w, h) {
  //유클리드 호제법
  //a = bq + r --> (a, b) = (b, r)
  //r이 0이 될 때, b가 최대공약수
  const getGCD = (a, b) => (b > 0 ? getGCD(b, a % b) : a);
  const gcd = getGCD(w, h);

  //최대공약수만큼 패턴이 반복됨
  //패턴 하나를 보면, w+h-1임을 알 수 있음
  //(w/gcd + h/gcd - 1) * gcd
  const unavailable = w + h - gcd;
  const available = (w * h) - unavailable;

  return available;
}