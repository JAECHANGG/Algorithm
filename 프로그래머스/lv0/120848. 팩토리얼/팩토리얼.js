function solution(n) {
    let answer = 1;
    let num = 1;
    for(let i = 2; i <= n; i++) {
        num *= i
        if(num <= n) {
            answer += 1
        } else {
            break;
        }
    }
    return answer;
}