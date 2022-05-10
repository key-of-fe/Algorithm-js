function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx, src) => signs[idx] ? acc + cur : acc + cur * -1
    , 0);
}
