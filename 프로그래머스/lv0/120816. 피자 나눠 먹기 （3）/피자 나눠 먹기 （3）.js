function solution(slice, n) {
    var answer = 0;
    answer = (n % slice) === 0 ? Math.floor(n / slice) : Math.floor((n / slice) + 1)
    return answer;
}

// n 나머지 slice = 0 이면 n / slice 하고 내림
// 아니라면 n / slice + 1하고 내림