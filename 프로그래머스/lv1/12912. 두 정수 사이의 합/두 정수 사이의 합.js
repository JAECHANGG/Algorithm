function solution(a, b) {
    let answer = 0
    for (let i = a; i<=b; i++) {
        a <= b ? answer += i : null
    }
    for (let i = b; i<=a; i++) {
        a > b ? answer += i : null
    }
    return answer
}

// a~b까지 값을 구한다.
// 더한다.