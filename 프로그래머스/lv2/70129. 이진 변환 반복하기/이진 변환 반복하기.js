function solution(s) {
    let count1 = 0;
    let count2 = 0;
    let c = 0;
    while(s.length >= 1) {
         const str = s.split('').filter(num => num === "0").length;
         count1 += 1;
         count2 += str;
         s = s.replaceAll("0", "").length;
         s = s.toString(2);
        
        if(s === "1") break;
    }
    return [count1, count2];
}