function getCombs(src, num) {
  if (num === 1) {
      return src.map(ele => [ele]);
  }
  
  const results = [];
  
  src.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combs = getCombs(rest, num -1);
      const attatched = combs.map(comb => [fixed, ...comb]);
      results.push(...attatched);
  })
  
  return results;
}

function isPrime(num) {
  if (num % 2 === 0) {
      return false;
  }
  for (let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

function solution(nums) {
  const combs = getCombs(nums, 3);
  const combSums = combs.map(comb => comb.reduce((acc, cur) => acc + cur, 0));
  return combSums.filter(combSum => isPrime(combSum)).length;
}
