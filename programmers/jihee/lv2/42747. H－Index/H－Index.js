function solution(citations) {
    let hIndex = 0;
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        if (i < citations[i]) {
            hIndex++;
        }
    }
    // while(hIndex + 1 <= citations[hIndex]){
    //     hIndex++;
    // }
    return hIndex;
}
