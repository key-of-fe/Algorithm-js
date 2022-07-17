function solution(record) {
  /**
   * user: 유저 닉네임 정보
   * inOutRecord: 입퇴장 기록
   */
  const user = {};
  const inOutRecord = [];

  record = record.map((v) => v.split(" "));

  for (const r of record) {
    const type = r[0];
    const uid = r[1];
    // 닉네임 변경
    if (type === "Enter" || type === "Change") {
      const nickname = r[2];
      user[uid] = nickname;
    }
    // 입퇴장 기록
    if (type === "Enter" || type === "Leave") {
      inOutRecord.push({ type: type, uid: uid });
    }
  }

  // 정답 출력
  const answer = [];
  for (const i of inOutRecord) {
    const finalName = user[i.uid];
    const inOutMsg = i.type === "Enter" ? "들어왔습니다" : "나갔습니다";
    answer.push(`${finalName}님이 ${inOutMsg}.`);
  }
  return answer;
}
