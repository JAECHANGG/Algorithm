function solution(num, k) {
    let array = num.toString().split("")

    for (let i = 0; i < array.length; i++) {
     if(Number(array[i]) === k) return i + 1
    }
    return -1
}