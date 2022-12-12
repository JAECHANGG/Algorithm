function solution(n) {
    n = n.toString().split("").sort((a, b) => b-a).join("")
    return Number(n)
}

// sort 내림차순 정렬