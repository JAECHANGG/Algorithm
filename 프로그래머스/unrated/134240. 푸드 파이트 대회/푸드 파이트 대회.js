function solution(food) {
    food.shift()
    let answer = []
    for(let i=0; i<food.length; i++) {
        if(food[i] % 2 !== 0) {
            answer.splice(Math.floor(answer.length/2), 0, ...String(i+1).repeat(food[i]-1).split(''))
        } else {
            answer.splice(Math.floor(answer.length/2), 0, ...String(i+1).repeat(food[i]).split(''))
        }
    }
    answer.splice(Math.floor(answer.length/2), 0, '0')
    return answer.join('')
}