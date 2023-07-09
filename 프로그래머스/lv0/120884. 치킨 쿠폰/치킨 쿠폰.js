function solution(chicken) {
    var answer = 0;
    for(let i=chicken; i>1; i /= 10) {
        chicken = chicken / 10;
        answer += chicken;
    }
    return Math.floor(answer);
}