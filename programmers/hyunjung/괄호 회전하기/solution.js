function solution(s) {
  let answer = 0;
  const stack = []; //unshift, shift;
  const queue = s.split(''); //push, shift;

  for (let i = 0; i < s.length; i++) {
    const copyQueue = queue.slice();
    const copyStack = stack.slice();

    //queue에 있는 값을 하나씩 꺼내서 stack에 넣는다.
    //stack에 괄호를 넣고 짝이 맞으면 pop한다
    while (copyQueue.length > 0) {
      let queTemp = copyQueue.shift();

      if (queTemp === '[' || queTemp === '(' || queTemp === '{') {
        copyStack.unshift(queTemp);
      }
      else {
        let stTemp = copyStack.shift();
        switch (queTemp) {
          case ']':
            // if(stTemp === '[')
            //     break;
            // else
            //     copyStack.unshift(stTemp);
            // break;

            if (stTemp !== '[')
              copyStack.unshift(stTemp);
            break;

          case ')':
            if (stTemp !== '(')
              copyStack.unshift(stTemp);
            break;

          case '}':
            if (stTemp !== '{')
              copyStack.unshift(stTemp);
            break;
        }
      }
    }// end of while()

    //while문 끝나고 stack 길이가 0이면 올바른 괄호 문자열
    if (copyStack.length === 0)
      answer++;

    //queue에서 remove하고 add한다. (왼쪽으로 회전)
    queue.push(queue.shift());

  }// end of for()

  return answer;
}