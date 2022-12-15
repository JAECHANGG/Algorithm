function solution(x, n) {
    let answer = [];
    if (x === 0) {
        let y=x.toString().repeat(n).split("").map(el => Number(el))
        return y
    } 
    else {
        for (let i = x; i >= 0 ? i <=n*x : i>=n*x; i += x) {
        answer.push(i)
        }
    }
    return answer
}

// x만큼 n번 증가해라.
// x+x 를 n번 만큼 반복해라