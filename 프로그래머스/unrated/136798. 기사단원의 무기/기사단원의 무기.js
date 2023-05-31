function solution(number, limit, power) {
    var answer = 0;
    let count = 0;
    let arr = [];
    
    for(let i=1; i<=number; i++) {
        for(let j=1; j<=Math.sqrt(i); j++) {
            if(i % j === 0) {
                count++
                if(i / j !== j) count++
            }
        }
        answer += count  > limit ? power : count 
        count = 0;
    }
    return answer;
}