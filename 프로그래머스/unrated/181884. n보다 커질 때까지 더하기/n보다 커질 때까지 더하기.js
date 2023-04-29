function solution(numbers, n) {
    let answer = 0;
    for(let num of numbers) {
        if(answer <= n) {
            answer += num;
        }
    }
    return answer;
}