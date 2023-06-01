function solution(k, score) {
    var answer = [];
    let result = [];
    for(let i=0; i<score.length; i++) {
        if(answer.length <= k) {
            answer.push(score[i]);
            answer.sort((a,b) => b-a);
            if(answer.length > k) {
                result.push(answer[answer.length - 2]);
            } else {
                result.push(answer[answer.length - 1]);
            }   
        }
        if(answer.length > k) {
            answer.pop();
        }
    }

    return result;
}