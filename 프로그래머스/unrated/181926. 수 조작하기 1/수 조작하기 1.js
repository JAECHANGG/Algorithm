function solution(n, control) {
    for(let i=0; i<control.length; i++) {
        const str = control[i]
        if(str === 'w') {
            n = n+1
        } else if(str === 's') {
            n = n-1
        } else if(str === 'd') {
            n = n+10
        } else if(str === 'a') {
            n = n-10
        }
    }
    return n
}