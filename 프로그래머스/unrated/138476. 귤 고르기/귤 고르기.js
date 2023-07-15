function solution(k, tangerine) {
    var answer = 0;
    const obj = {};
    const arr = [];
    let count = 0;
    
    
    for(let t of tangerine) {
        obj[t] = (obj[t] || 0) + 1;
    }
   
    for(let o in obj) {
        arr.push([o, obj[o]]);
    }

    arr.sort((a, b) => b[1] - a[1]);
    
    for(let i=0; i<arr.length; i++) {
        count += arr[i][1];
        answer++;
        
        if(count >= k) {
            return answer;
        }
        
    }
}