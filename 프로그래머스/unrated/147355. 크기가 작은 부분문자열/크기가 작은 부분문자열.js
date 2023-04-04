function solution(t, p) {
    const arr = t.split('')
    const answer = []
    for(let i=0; i<arr.length; i++) {
        if(arr.slice(i, p.length+i).length === p.length) {
            answer.push(arr.slice(i, p.length+i).join(''))   
        }
    }
    return answer.filter((num) => p >= num).length
}