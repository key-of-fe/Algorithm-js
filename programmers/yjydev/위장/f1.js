// 성공률 10프로.   
// 이유 => 28번째 줄에서 while 반복문을 돌 때, temp 값을 1로 초기화시키는 연산을 while문 밖에서 해야했었는데, 29번째 줄처럼 내부로 넣어버렸어서 그랬었다.    

function getCombinations(arr, num) {
    const result = [];
    if (num === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const comb = getCombinations(rest, num -1);
        const attached = comb.map((el) => [fixed, ...el]);
        result.push(...attached);
    });
    return result;
}

function solution(clothes) {
    var answer = clothes.length;
    var closet = new Map();
    clothes.forEach(cloth => 
                    closet.has(cloth[1]) ? 
                    (val = closet.get(cloth[1]), val.push(cloth[0]),closet.set(cloth[1],val))
                    : closet.set(cloth[1], [cloth[0]]));
    var types = [...closet.keys()]
    for (var i = 2; i < types.length+1; i++) {
        var type_comb = getCombinations(types, i);
        type_comb.forEach(comb => {
            var j = 0;
            while (j < i) {
            var temp = 1;
            temp *= closet.get(comb[j]).length;
            j += 1; }
        answer += temp;
        })
    }
    return answer;
}
