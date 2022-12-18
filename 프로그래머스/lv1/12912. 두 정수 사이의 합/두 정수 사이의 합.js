function solution(a, b) {
    var answer = 0;
    if (a === b) return a
    
    if ( a > b) {
        for (let i = b; i<=a; i++)
            answer += i
    } else {
        for(let i = a; i<=b; i++) {
            answer += i
        }
    }
    return answer
}

// a === b 일 때 return a
// a가 b보다 클 때, b가 a보다 클 때