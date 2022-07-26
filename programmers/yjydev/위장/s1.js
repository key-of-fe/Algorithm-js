function solution(clothes) {
  var answer = 1;
  var closet = new Map();
  clothes.forEach(cloth => 
                  closet.has(cloth[1]) ? 
                  (val = closet.get(cloth[1]), val.push(cloth[0]),closet.set(cloth[1],val))
                  : closet.set(cloth[1], [cloth[0]]));
  var types = [...closet.keys()]
  for (var i = 0; i < types.length; i++) {
      answer *= closet.get(types[i]).length + 1;
  }
  return answer-1
}
