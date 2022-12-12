function solution(n) {
    for (let i = 1; i<n; i++) {
       if(n % i === 1) return i
    }
}

// n % x === 1 인 가장 작은 수 찾기
// 바로 reutrn 하면 됨