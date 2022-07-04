function solution(priorities, location) {
    let answer = 1;
    let max = Math.max(...priorities);

    while (1) {
        max = Math.max(...priorities);
        if (location === 0 && priorities[0] === max) break;

        if (priorities[0] === max) {
            priorities.shift();
            answer++;
            location--;
        } else {
            priorities.push(priorities.shift());
            location = location === 0 ? priorities.length - 1 : location - 1;
        }
    }
    return answer;
}
