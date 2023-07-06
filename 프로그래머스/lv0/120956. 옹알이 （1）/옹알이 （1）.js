function solution(babbling) {
    const answer = [];
    const arr = ["aya", "ye", "woo", "ma"];
    for(let b of babbling) {
        for(let a of arr) {
            b = b.replace(a, '1')
            if(b === '1' || b === '11' || b === '111' || b === '1111') {
                answer.push(b);
                break;
            }
        }
    }
    return answer.length;
}