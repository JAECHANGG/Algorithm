function solution(hp) {
    let answer = 0
    answer += Math.floor(hp/5)
    hp %= 5
    answer += Math.floor(hp/3)
          console.log(answer)
    hp %= 3
    answer += hp/1
    return answer
}

// 장군 5 병정 3 일 1
// hp 23 장군 4 병정 1
// hp/장군 몫 + hp%장군/병정 몫 + hp%장군/병정%병정/일 몫 소수점 버림해야함