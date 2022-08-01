function solution(k, dungeons) {
    var answer = 0;
    const len = dungeons.length;
    const permutations = getPermu(Array.from({length:len}, (v,i) => i), len);
    permutations.forEach((permu) => {
        var cur_k = k;
        var cnt = 0;
        permu.forEach((p) => {
            if (cur_k >= dungeons[p][0]) { 
                cnt += 1;
                cur_k -= dungeons[p][1];
            }
            if (cnt > answer) {
                answer = cnt;
                return;
            }
        })
    })
    return answer;
}

function getPermu(arr, n) {
    const result = [];
    if (n === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
        const permu = getPermu(rest, n-1);
        const attached = permu.map((el) => [fixed, ...el]);
        result.push(...attached);
    });
    return result;
}
