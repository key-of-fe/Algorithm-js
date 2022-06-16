function solution(s)
{
    const stack = [];
    for(let i = 0; i<s.length; i++){
        if(!stack.length || stack[stack.length-1] !==s[i]){
            // !isEmpty || 앞뒤로 다른 알파벳
            stack.push(s[i]);
            // 일단 넣어
        } else {
            stack.pop();
            // 빼
        }
    }

    return stack.length ? 0: 1;
}
