function solution(bridge_length, weight, truck_weights) {
  //다리 길이만큼 queue를 0으로 채움
  let queue = Array.from({ length: bridge_length }, v => 0);
  // console.log(queue)

  //현재 다리 위 트럭 무게 합, 시간 카운트 변수 선언
  let sum = 0, time = 0;
  //다리에 트럭이 없을 때까지 (다 지나갈 때까지)
  while (queue.length > 0) {
    time++;
    sum -= queue.shift();
    //대기 트럭이 있을 때
    if (truck_weights.length > 0) {
      let first = truck_weights.shift(); //대기 트럭 중 가장 첫번째
      //현재 다리 위의 트럭 합 무게 + 대기 트럭 무게 <= 다리 무게 하중 
      if (sum + first <= weight) {
        //지나갈 수 있음
        sum += first;       //현대 다리 위 트럭 무게 합에 더함
        queue.push(first);  //큐에 추가
      }
      //다리 무게 하중 넘을 경우
      else {
        //지날 수 없음
        truck_weights.unshift(first); //대기 트럭에 다시 넣어줌
        queue.push(0);  //큐에 0 추가
      }
    }

  }
  return time;
}