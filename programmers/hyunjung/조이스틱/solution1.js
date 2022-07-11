//테케 3, 11, 12, 13, 14, 15, 18, 20, 22, 23, 24, 25, 26, 27 실패

function solution(name) {
  const arr = [];
  let answer = 0;

  //상하 조작
  const upDown = val => {
    const tmp1 = Math.abs('A'.charCodeAt(0) - val.charCodeAt(0));
    const tmp2 = Math.abs('Z'.charCodeAt(0) - val.charCodeAt(0) + 1);
    return Math.min(tmp1, tmp2);
  }

  //name 탐색 --> 대문자, flag(A인지 아닌지)를 객체로 배열에 삽입
  for (let i = 0; i < name.length; i++) {
    const tmp = name.charAt(i);
    // console.log(tmp);
    if (tmp === 'A') {
      arr.push({ val: tmp, flag: 0 });
    } else {
      arr.push({ val: tmp, flag: 1 });
      answer += upDown(tmp);
    }
  }
  // console.log(arr);
  // console.log(answer);

  //좌우 조작
  let min = 21;
  let last = 0;
  //우로 이동 (뒤에서부터 첫번째 제외한 A가 아닌 대문자 탐색)
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].flag === 1) { //A가 아닌 대문자
      min = i;
      last = i;
      break;
    } else if (i == 0 && arr[i].flag === 0) {
      //이동하지 않아도 되는 경우 (ex. JAA)
      min = Math.min(min, 0);
    }
  }
  //좌로 이동 (앞에서부터 첫번째 제외한 A가 아닌 대문자 탐색)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].flag === 1) {
      const tmp = last - i + 1;
      min = Math.min(min, tmp);
      break;
    } else if (i == arr.length - 1 && arr[i].flag === 1) {
      //맨 뒤로 한번만 이동하면 되는 경우 (ex. JAN)
      min = Math.min(min, 1);
    }
  }

  return answer + min;
}