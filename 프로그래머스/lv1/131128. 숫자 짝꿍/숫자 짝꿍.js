function solution(X, Y) {
    let answer = '';
    const objX = {};

    for(let x of X) {
        if(objX[x] === undefined) objX[x] = 1;
        else objX[x]++;
    }
    
    for(let j=0; j<Y.length; j++) {
        if(objX[Y[j]] !== undefined && objX[Y[j]] !== 0) {
           answer += Y[j];
           objX[Y[j]]--;
        }
    }

    if(answer === "") {
       return "-1";
    }
    if(Number(answer) === 0) {
        return "0";
    }
    
    answer = answer.split('').sort((a, b) => b - a).join('');
    return answer;
}