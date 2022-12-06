function solution(d, budget) {
    let temp = 0
    let answer = 0
    let sor = d.sort((a,b) => a-b)
    while(budget >= temp){
          temp += sor[answer++]
          }
    return answer - 1
}