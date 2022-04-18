function solution(lottos, win_nums) {
let cntZeros = 0;
let cntFits = 0;

for (let n of lottos) {
    if (n === 0) cntZeros++;
    else if (win_nums.includes(n)) cntFits++;
}

return [7 - (cntFits === 0 ? 1 : cntFits) - (cntZeros === 6 ? 5 : cntZeros), 7 - (cntFits === 0 ? 1 : cntFits)];
}
