function solution(myString) {
    var answer = [];
    let count = 0;
    for(let s of myString) {
        if(s !== 'x') count++;
        else {
            answer.push(count);
            count = 0;
        }
    }
    answer.push(count);
    return answer;
}