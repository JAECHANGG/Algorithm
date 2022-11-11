function solution(n) {
    if (n % 7 === 0) { // n 나누기 7은 나머지가 0일 때
        return Math.floor(n/7) // n/7을 내림해서 리턴한다.
    } else { // 그게 아니라면
        return Math.floor(n/7 + 1) // 내림해서 n/7 + 1을 리턴한다.
    }
}

