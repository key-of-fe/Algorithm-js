function solution(participant, completion) {
  let sortedParticipant = participant.sort();
  let sortedCompletion = completion.sort();
  for (let i = 0; i <= sortedParticipant.length; i++) {
      if (sortedParticipant[i] !== sortedCompletion[i]) {
          return sortedParticipant[i];
      }
  }
}
