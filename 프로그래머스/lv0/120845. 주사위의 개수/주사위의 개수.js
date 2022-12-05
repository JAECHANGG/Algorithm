function solution(box, n) {
    let width = parseInt(box[0] / n)
    let height = parseInt(box[1] / n)
    let length = parseInt(box[2] / n)
    
    return width * height * length
}

// 박스의 가로 세로 높이가 n의 배수여야 딱 맞는다.
// 아니면 나머지를 버린다.