function solution(n) {
    let Str = (String(n))
    let arrs = Str.split("")
    let answer = 0
    for (arr of arrs) {
      answer += Number(arr)
    }
    return answer
}

// 문자로 바꿔주고 배열로 묶어줌
// 배열을 다시 풀고 숫자로 바꾼다음 더해준다.