function solution(s) {
    let answer;
    for(let i = 0; i<s.length; i++) {
        if(s.length === 4 || s.length === 6) {
            if(!isNaN(s[i])) answer = true
            else if(isNaN(s[i])) answer = false
        } else answer = false
        
        if (answer === false) return answer
    }
    return answer
}