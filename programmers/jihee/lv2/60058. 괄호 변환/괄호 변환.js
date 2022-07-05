function solution(p) {
    let answer = '';
    let isProper = true;
    let cnt = 0;
    
    if(p.length === 0) return "";
    
    for(let i = 0; i < p.length; i++){
        if(p[i] == '(') cnt++;
        else cnt--;
        if(cnt < 0) isProper = false;
        if(cnt === 0) {
            if (isProper == false) {
                answer += '(';
                answer += solution(p.slice(i + 1, p.length));
                answer += ')';
                for (let j = 1; j < i; j++) {
                    if (p[j] == ')') answer += '(';
                    if (p[j] == '(') answer += ')';
                }
                return answer;
            }
            else { 
                answer += p.slice(0, i + 1);
                answer += solution(p.slice(i + 1, p.length));
                return answer;
            }
        }
    }
    
}
