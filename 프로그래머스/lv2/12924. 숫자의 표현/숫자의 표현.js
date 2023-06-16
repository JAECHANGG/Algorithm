function solution(n) {
    if(n === 1) return 1;
    
    var answer = 1;
    let count = 0;
    let j = 0;
    
    for(let i = 1; i<=Math.ceil(n/2); i++) {
        count += i;
        if(count === n) {
            j++;
            i = j;
            answer++;
            count = 0;
        } else if(count > n) {
            j++;
            i = j;
            count = 0;
        }
    }
    return answer;
}