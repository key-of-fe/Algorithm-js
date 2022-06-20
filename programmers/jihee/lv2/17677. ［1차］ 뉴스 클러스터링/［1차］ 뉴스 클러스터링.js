function solution(str1, str2) {
    
    function check(string) {
        const result = [];
        for(let i = 0; i < string.length -1; i ++){
            const cut = string.substr(i,2);
            if(cut.match(/[A-Za-z]{2}/)){
                result.push(cut.toLowerCase());
            }
        }
        return result;
    }
    
    const arr1 = check(str1);
    const arr2 = check(str2);
    const set = new Set([...arr1, ...arr2]);
    let intersection = 0;
    let union = 0;
    
    set.forEach((item) => {
        const matchIdx1 = arr1.filter(x => x === item).length;
        const matchIdx2 = arr2.filter(x => x === item).length;
        intersection += Math.min(matchIdx1, matchIdx2);
        union += Math.max(matchIdx1, matchIdx2);
    })
    return union === 0 ? 65536 : Math.floor(intersection/union * 65536);
}
