function solution(box, n) {
    let sum = box.map(el => Math.floor(el / n))
    return sum[0] * sum[1] * sum[2]
}

// Math.floor(box[0,1,2] / n)
// 나머지 몫들을 다 곱해준다.