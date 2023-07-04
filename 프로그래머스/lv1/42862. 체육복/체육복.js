function solution(n, lost, reserve) {
    var answer = new Array(n).fill(1);
    
    for(let i=0; i<lost.length; i++) {
        answer[lost[i]-1]--;
    }
    
    for(let i=0; i<reserve.length; i++) {
        answer[reserve[i]-1]++;
    }
    
    for(let i=0; i<answer.length; i++) {
        if(answer[i] === 0) {
            if(answer[i-1] > 1) {
                answer[i-1]--;
                answer[i]++;
            } else if(answer[i+1] > 1) {
                answer[i+1]--;
                answer[i]++;
            } 
        }
    }
    
    return answer.filter(num => num >= 1).length;
}