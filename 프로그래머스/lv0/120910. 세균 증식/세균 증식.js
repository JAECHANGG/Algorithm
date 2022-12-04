function solution(n, t) {
    return (Array(t).fill(n).reduce((prev,cur) => prev*2, n))
}

// t + 1 = n * 2 계속 해준다.