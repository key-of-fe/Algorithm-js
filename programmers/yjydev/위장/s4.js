function solution(clothes) {
  var answer = 1;
  var closet = clothes.reduce((closet, [name,type]) => {
      closet.has(type) ? closet.set(type,closet.get(type)+1)
                  : closet.set(type, 1);
      return closet
  }, new Map())
  var types = [...closet.keys()]
  for (var i = 0; i < types.length; i++) {
      answer *= closet.get(types[i]) + 1;
  }
  return answer-1
}
