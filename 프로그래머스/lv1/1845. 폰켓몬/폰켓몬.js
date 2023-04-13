function solution(nums) {
    const len = nums.length/2
    const newLen = [...new Set(nums)].length
    if(len < newLen) return len
    return newLen
}