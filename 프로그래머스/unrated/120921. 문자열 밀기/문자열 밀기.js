function solution(A, B) {
    if(A === B) return 0;
    for(let i=0; i<B.length; i++) {
        let lastStr = A[A.length-1];
        A = A.slice(0, -1);
        A = lastStr + A;
        
        if(A === B) return i+1;
        console.log(A, lastStr)
        
    }
    return -1;
}