function solution(numbers) {
    let number = numbers.sort((a,b) => a-b)
    if (number[0] * number[1] > number[number.length-1] * number[number.length-2]) {
       return number[0] * number[1]
    } else return number[number.length-1] * number[number.length-2]
}

// sort [0],[1],[-1],[-2]
// [0]*[1] 과 [-1]*[-2] 비교해서 큰 값 리턴