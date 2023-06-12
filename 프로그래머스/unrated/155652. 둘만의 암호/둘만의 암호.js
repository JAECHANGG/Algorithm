function solution(s, skip, index) {
    var answer = '';

    const alphabet = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97)).filter(str => !skip.includes(str));
    
    for(let i=0; i<s.length; i++) {
        for(let j=0; j<alphabet.length; j++) {
            if(s[i] === alphabet[j]) {
                const idx = j+index;
                answer += idx < alphabet.length ? alphabet[idx] : alphabet[idx % alphabet.length];
            }
        }
    }

    return answer;
}