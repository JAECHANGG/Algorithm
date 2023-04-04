function solution(array, commands) {
    let answer = []
    for(let a = 0; a<commands.length; a++) {
        const i = commands[a][0]
        const j = commands[a][1]
        const k = commands[a][2]
        answer.push(array.slice(i-1, j).sort((a,b) => a-b)[k-1])
    }
    return answer
}