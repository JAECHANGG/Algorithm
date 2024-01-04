function solution(numLog) {
    var answer = '';
    for(let i=0; i<numLog.length-1; i++) {
        if(numLog[i] < numLog[i+1]) {
            if(String(numLog[i+1]).at(-1) == String(numLog[i]).at(-1)) {
                answer += "d"
            } else {
                answer += "w"
            }
        } else {
            if(String(numLog[i+1]).at(-1) == String(numLog[i]).at(-1)) {
                answer += "a"
            } else {
                answer += "s"   
            }
        }
    }
    return answer;
}