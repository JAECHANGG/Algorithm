function solution(array, n) {
    const arr = array.sort((a,b) => a-b).map((num) => Math.abs(num - n))
    const minNum = Math.min(...arr)
    const idx = arr.indexOf(minNum)
    return array[idx]
}