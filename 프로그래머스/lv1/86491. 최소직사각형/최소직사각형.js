function solution(sizes) {
    let maxNum1 = []
    let maxNum2 = []
    for(let i=0; i<sizes.length; i++) {
        sizes[i].sort((a,b) => a-b)
        maxNum1.push(sizes[i][0])
        maxNum2.push(sizes[i][1])
    }
    return Math.max(...maxNum1) * Math.max(...maxNum2)
}