function solution(n, m) {
    let minN = [];
    let minM = [];
    let result = [];
    for(let i =1; i<=n; i++) {
        if(n % i === 0) {
          minN.push(i)  
        } 
    }
     for(let i=1; i<=m; i++) {
        if(m % i === 0) {
          minM.push(i)  
        } 
    }
    const minNum = minN.filter((num) => minM.includes(num)).sort((a,b) => b-a)[0]
    const maxNum = n * m / minNum
    result.push(minNum, maxNum)
    return result
}