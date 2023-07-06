function solution(num, total) {
    const answer = [];
    const n = total / num;
    for(let i=n-(num-1)/2; i<=n+(num-1)/2; i++) {
        answer.push(i)
    }
    return answer;
}