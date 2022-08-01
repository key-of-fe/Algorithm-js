function solution(brown, yellow) {
  const total = brown + yellow;

  for (let w = 3; w <= total; w++) {
    let h = parseInt(total / w);
    if (yellow === (w - 2) * (h - 2))
      return w > h ? [w, h] : [h, w];
  }

}