function solution(babbling) {
    var answer = 0;
    
    babbling = babbling.filter((str) => !str.includes("ayaaya") && !str.includes("yeye") && !str.includes("woowoo") && !str.includes("mama"));

    for(let b of babbling) {  
        b = b.replaceAll(/aya|ye|woo|ma/g, 1);
        b = b.split('');
        b = [...new Set(b)].join('');
        
        if(b === '1') {
            answer++;
        }
    }
    
    
    return answer;
}