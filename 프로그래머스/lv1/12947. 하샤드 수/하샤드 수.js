function solution(x) {
    let answer = 0;
    x = x.toString()
    for(let i = 0; i<x.length; i++) {
        answer += Number(x[i])
    }
    if (Number(x) % answer === 0) return true;
    else return false;
}

// x의 모든 자리를 더한다.
// 더한 수에 x를 나누고 % 0 이면 true 아니면 false