function solution(my_string) {
    return my_string.split("").filter(el => !isNaN(el)).map(x => Number(x)).sort((a,b) => a-b)
}

// 배열로 묶는다
// 숫자만 남긴다
// 문자열을 숫자로 바꾼다
// 오름차순 해준다