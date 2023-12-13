function solution(s) {
    var answer = [];
    for(let i=0; i<s.length; i++) {
        answer.push(s.slice(i));
    }
    return answer.sort();
}