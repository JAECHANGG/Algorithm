function solution(s) {
    let answer = ''
    const sort = s.split(' ').sort((a,b)=>a-b)
    return answer += sort[0] + ' ' + sort[sort.length - 1]
    
}