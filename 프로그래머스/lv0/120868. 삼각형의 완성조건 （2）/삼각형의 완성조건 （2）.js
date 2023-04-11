function solution(sides) {
    sides.sort((a,b)=>b-a)
    var answer = 0;
    let i = sides[0] + sides[1] - 1 // 나머지 한 변이 가장 긴 경우
    let j = sides[0] - sides[1] + 1// sides[0]이 가장 긴 경우
    for(j; j<=sides[0]; j++) {
        answer += 1
    }
    for(i; i>sides[0]; i--) {
        answer += 1
    }
    return answer;
}