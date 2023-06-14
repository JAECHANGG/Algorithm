function solution(n) {
    const n2 = n.toString(2).split('').filter(num => num === '1').length;
    for(let i=n+1; n<=1000000; i++) {
        const i2= i.toString(2).split('').filter(num => num === '1');
        if(n2 === i2.length) {
            return +i.toString(10);
        }
    }
}