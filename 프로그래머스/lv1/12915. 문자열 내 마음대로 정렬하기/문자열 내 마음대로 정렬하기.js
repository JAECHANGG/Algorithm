function solution(strings, n) {
    const result = strings.sort((a,b) => a[n]>b[n] ? 1 : -1)
    return result.sort((a,b) => a[n]===b[n] && (a>b ? 1 : -1))
}