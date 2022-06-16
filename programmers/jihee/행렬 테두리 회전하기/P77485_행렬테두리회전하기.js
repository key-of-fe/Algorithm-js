// 주비님 코드 참고
function solution(rows, columns, queries) {
    const board = Array(rows).fill().map((row, i) => Array(columns).fill().map((column, j) => i*columns + j + 1));
 
    const rotate = function(query){
        let [x1, y1, x2, y2] = query;
        x1--, y1--, x2--, y2--;
 
        const ft = board[x1][y1];
        const arr = [ft];
        for(let i = x1; i < x2; i++){
            arr.push(board[i][y1] = board[i+1][y1]);
        }
        for(let j = y1; j < y2; j++){
            arr.push(board[x2][j] = board[x2][j+1]);
        }
        for(let i = x2; i > x1; i--){
            arr.push(board[i][y2] = board[i-1][y2]);
        }
        for(let j = y2; j > y1; j--){
            arr.push(board[x1][j] = board[x1][j-1]);
        }
        board[x1][y1+1] = ft;
 
        return Math.min(...arr);
    }
 
    return queries.reduce((ans, query) => {
        ans.push(rotate(query));
        return ans;
    }, []);
}
