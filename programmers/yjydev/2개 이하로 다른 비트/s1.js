function solution(numbers) {
    var answer = [];
    for (n of numbers) {
        if (n % 2 === 0) {
            answer.push(n+1);
        }
        else {
            var bit = n.toString(2);
            var idx = bit.lastIndexOf('0');
            var res = idx === -1 ? '10' + bit.substring(1) 
                        : bit.substring(0, idx) + '10' + bit.substring(idx+2)
            answer.push(parseInt(res,2));
        }
    }
    return answer;
}
