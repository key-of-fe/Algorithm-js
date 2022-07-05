// 조합 함수 구현
const getCombs = (arr, cnt) => {
  const results = [];

  if (cnt === 1) {
    return arr.map(ele => [ele]);
  }

  arr.forEach((ele, idx, src) => {
    const rest = src.slice(idx + 1);
    const combs = getCombs(rest, cnt - 1);
    const result = combs.map(comb => [ele, ...comb]);

    results.push(...result)
  })

  return results
}

function solution(orders, course) {
  const answer = [];

  // 코스 및 개수 구현
  course.forEach(cnt => {
    const result = {};

    orders.forEach(order => {
      getCombs(order.split(""), cnt).forEach(comb => {
        const course = comb.sort().join("");
        if (result[course]) {
          result[course] += 1;
        } else {
          result[course] = 1;
        }
      });
    });

    // filter
    const maxOrders = Math.max(...Object.values(result));

    Object.entries(result).forEach(([key, val]) => {
      if (val === maxOrders && val >= 2) {
        answer.push(key);
      }
    });
  });

  // 오름차순 정렬
  return answer.sort();
}
