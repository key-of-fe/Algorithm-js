// 정확성 테스트는 모두 통과했는데 효율성 테스트에서 모두 시간초과..다시 생각해봐야할듯!
function solution(s)
{
    var l = Array.from(s);
    var flag = false;
    for (var i=0; i <l.length; i++) {
        if (l[i] === l[i+1]) {
            l.splice(i,2);
            flag = true;
            i=-1;
        }       
    }
    if (flag === true && l.length === 0){
        return 1
    } else {
        return 0
    }
}
