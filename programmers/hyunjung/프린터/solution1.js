function solution(priorities, location) {

  // 배열 요소가 중요도, 인덱스를 요소로 가진 객체인 배열 생성
  const waitList = priorities.map((val, idx, arr) => {
    return { val, idx }
  });

  const changed = (arr, loc) => {

    let maxVal = Math.max(...waitList.map(o => o.val), 0); //최대값
    let cnt = 0; //출력 카운트

    while (true) {
      const first = arr[0]; //첫번째 문서

      if (first.val < maxVal) {
        arr.push(arr.shift()); //첫번째 문서를 맨 뒤로 이동
      } else if (first.val == maxVal) {
        const print = arr.shift(); //출력
        cnt++; //출력 카운트 증가

        if (print.idx == loc) { //내가 인쇄 요청한 문서일 경우
          return cnt; //출력 카운트 리턴
        }
        maxVal = Math.max(...waitList.map(o => o.val), 0);
      }
    }

  }

  return (changed(waitList, location));
}