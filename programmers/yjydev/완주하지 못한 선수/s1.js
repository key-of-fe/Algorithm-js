function solution(participant, completion) {
  const parti = participant.sort();
  const comp = completion.sort();
  for (idx in comp) {
    if (parti[idx] !== comp[idx]) {
      return parti[idx];
    }
  }
  return parti[parti.length - 1];
}
