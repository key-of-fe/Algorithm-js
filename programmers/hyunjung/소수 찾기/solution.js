function solution(numbers) {
  //종이 조각 배열 만들기
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    arr.push(numbers.slice(i, i + 1));
  }
  // console.log('arr: ', arr);

  //순열로 숫자 만들기
  const permArr = [];
  const permutation = (arr, selected) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newSelected = selected + arr[i];
        const newArr = arr.slice();
        newArr.splice(i, 1);

        permArr.push(newSelected);
        permutation(newArr, newSelected);
      }
    }
  }
  permutation(arr, '');
  // console.log(permArr);

  //소수 찾기
  const primeSet = new Set;
  const prime = (num) => {
    if (num <= 1) return false;
    if (num == 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < permArr.length; i++) {
    const tmp = parseInt(permArr[i]);
    if (prime(tmp))
      primeSet.add(tmp);
  }

  return primeSet.size;
}