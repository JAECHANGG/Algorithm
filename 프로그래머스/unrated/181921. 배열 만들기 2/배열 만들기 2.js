function solution(l, r) {
    var answer = [];

    for(let i=l; i<=r; i++) {
        const str = String(i);
        const condition = !(str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") || str.includes("6") || str.includes("7") || str.includes("8") || str.includes("9"));
        
        if(condition) {
            answer.push(i);
        }
    }
    return answer.length === 0 ? [-1] : answer;
}