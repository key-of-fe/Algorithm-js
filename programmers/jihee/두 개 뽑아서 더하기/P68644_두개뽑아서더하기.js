function solution(numbers) {
    
    const sorted_numbers = numbers.sort((a,b) => a - b);
    const set_answer = new Set([]);
    for ( let i = 0; i < sorted_numbers.length; i++){
        for ( let j = i + 1; j < sorted_numbers.length; j++){
            let sum = sorted_numbers[i] + sorted_numbers[j];
            set_answer.add(sum);
        }
    }
    
    let answer = Array.from(set_answer).sort((a,b) => a - b);
    return answer;
}
