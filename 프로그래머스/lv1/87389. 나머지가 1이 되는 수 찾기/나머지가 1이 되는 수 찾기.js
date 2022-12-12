function solution(n) {
    let answer = []
    for (let i = 1; i<=n; i++) n % i === 1 ? answer.push(i) : null
    return answer[0]
    
}

// n % x === 1 인 가장 작은 수 찾기
// 바로 reutrn 하면 됨