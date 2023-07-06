function solution(inputString) {
    const counts = inputString.reduce((pv, cv)=>{
        pv[cv] = (pv[cv] || 0) + 1;
        return pv;
    }, {});

    const result = [];
    for (let key in counts) {
        result.push([key, counts[key]]);
    }

    result.sort((a, b) => b[1] - a[1]);
    
    if(result.length > 1) {
        for(let i=1; i<result.length; i++) {
        if(result[0][1] === result[i][1]) return -1;
    }   
    }

    return +result[0][0];
}