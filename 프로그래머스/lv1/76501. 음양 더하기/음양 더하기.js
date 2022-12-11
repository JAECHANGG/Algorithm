function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, index) => acc += signs[index] ? cur*1: cur*-1, 0)
}