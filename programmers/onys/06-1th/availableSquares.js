const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

function solution(w, h) {
  let GCD = getGCD(w, h);
  const originW = w;
  const originH = h;
  w = w / GCD;
  h = h / GCD;

  const inclination = h / w;
  let erased = 0;
  for (let i = 1; i < w + 1; i++) {
    const curPos = i * inclination;
    let prePos = Math.floor((i - 1) * inclination);
    prePos = i === 0 ? 0 : prePos;
    const maxPos = Math.ceil(curPos);
    erased += maxPos - prePos;
  }

  return originW * originH - (erased * GCD);
}
