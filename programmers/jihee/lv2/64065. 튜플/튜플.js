function solution(s) {
    let answer = [];
    let tuples = s.slice(2, -2).split(/},{/g)
    .sort((a, b) => a.length - b.length)
    .forEach(i => {
        let tuple = i.split(',');
        answer.push(tuple.find(e => !answer.includes(e)));
    });
    return answer.map(e => Number(e));
}
