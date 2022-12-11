function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc += cur, 0)
}

// 45 - numbers 더한 값