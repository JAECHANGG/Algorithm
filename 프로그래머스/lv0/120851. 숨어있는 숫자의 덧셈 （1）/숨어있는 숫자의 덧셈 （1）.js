function solution(my_string) {
    let arr = my_string.split("")
    let fil = arr.filter(el => !isNaN(el))
    let m = fil.map(x => Number(x))
    let counter = 0
    for (let i=0; i<m.length; i++){
        counter += m[i]
    }
    return counter
}

// 배열로 하나씩 쪼개줌
// 문자가 아닌 것들을 제거 , NaN이 아닌 것들만 살아남음
// 숫자끼리 더해줌