function solution(emergency) {
    const answer = [...emergency]
    const reverse = [...emergency].sort((a,b) => b-a)
    for(let i = 0; i<emergency.length; i++) {
        for(let j = 0; j<emergency.length; j++) {
            if(emergency[j] === reverse[i]) {
                answer[j] = i+1
             }
         }
    }
    return answer
}