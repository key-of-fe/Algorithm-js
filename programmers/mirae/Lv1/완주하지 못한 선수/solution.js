function solution(participant, completion) {
  const partMap = new Map();

  // 참가자 명단에 있으면 +1, 완주자 명단에 있으면 -1
  for (let i = 0; i < participant.length; i++) {
    const partName = participant[i];
    const compName = completion[i];

    partMap[partName] = partMap[partName] ? partMap[partName] + 1 : 1;
    partMap[compName] = partMap[compName] ? partMap[compName] - 1 : -1;
  }

  // 참가자 명단, 완주자 명단에 모두 있으면 0, 완주자 명단에 없는 경우 1이 됨
  // completion 길이가 1 짧아서 undefined: -1이 하나 들어가지만 답에는 영향을 주지 않음
  for (let name of participant) {
    if (partMap[name] > 0) return name;
  }
}
