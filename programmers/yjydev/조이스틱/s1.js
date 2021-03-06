function solution(name) {
    var answer = 0;
    var move = name.length - 1;
    var next = 0
    for (var i=0; i < name.length; i++) {
        answer += Math.min(name.charCodeAt(i) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - name.charCodeAt(i)+1);
        next = i+1;
        while (next < name.length && name[next] == 'A') {
            next += 1;
        };
        move = Math.min(move, i + i + name.length - next);
        move = Math.min(move, i+(name.length-next)*2)
    }
    answer += move;
    return answer;
}
