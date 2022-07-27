// 성공률 96.4프로. 1번 테케 런타임 에러 
// 이유 => 조합이 시간이 너무 오래걸리는 것으로 + 재귀 깊이 값 초과로 추정..
// + 사실 조합으로 굳이 모든 경우의 수를 다 구하고 거기서 다시 경우의 수를 따질 필요는 없고 그냥 경우의 수만 따지면 되는 것이었다..

function getCombinations(arr, num) {
  const result = [];
  if (num === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const comb = getCombinations(rest, num -1);
      const attached = comb.map((el) => [fixed, ...el]);
      result.push(...attached);
  });
  return result;
}

function solution(clothes) {
  var answer = clothes.length;
  var closet = new Map();
  clothes.forEach(cloth => 
                  closet.has(cloth[1]) ? 
                  (val = closet.get(cloth[1]), val.push(cloth[0]),closet.set(cloth[1],val))
                  : closet.set(cloth[1], [cloth[0]]));
  var types = [...closet.keys()]
  for (var i = 2; i < types.length+1; i++) {
      var type_comb = getCombinations(types, i);
      type_comb.forEach(comb => {
          var j = 0;
          var temp = 1;
          while (j < i) {
          temp *= closet.get(comb[j]).length;
          j += 1; }
      answer += temp;
      })
  }
  return answer;
}
