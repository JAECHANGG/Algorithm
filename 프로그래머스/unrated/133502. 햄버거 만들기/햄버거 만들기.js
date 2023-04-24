function solution(ing) {
    var answer = 0;
    for(let i=0; i<ing.length-3; i++) {
        if(ing[i] == 1 && ing[i+1] == 2 && ing[i+2] == 3 && ing[i+3] == 1 ) {
            answer++
            ing.splice(i,4)
            i=i-3;
        }
    }
    return answer;
}