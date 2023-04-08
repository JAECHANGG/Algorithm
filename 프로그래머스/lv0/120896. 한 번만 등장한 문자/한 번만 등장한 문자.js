function solution(s) {
    let ans = [];
    
    let sArr = s.split("");
    
    sArr.map((item) => {
        if(s.indexOf(item) === s.lastIndexOf(item)){
            ans.push(item);
        }
    })
    
    return ans.sort().join("");
}