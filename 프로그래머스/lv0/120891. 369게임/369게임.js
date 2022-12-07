function solution(order) {
   let answer = 0
   order = order.toString().split("")
    for(let i = 0; i < order.length; i++) {
        if (Number(order[i]) === 3) answer += 1     
        else if(Number(order[i]) === 6) answer += 1
        else if(Number(order[i]) === 9) answer += 1
    }
    return answer
}

// 배열로 만들어서 반복문을 돌린다.
// 3, 6, 9 라면 answer + 1을 해준다.
// return