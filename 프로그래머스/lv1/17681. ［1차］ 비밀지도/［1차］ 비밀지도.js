function solution(n, arr1, arr2) {
    let result = '';
    let answer = [];
    
    const numArr1 = arr1.map((num) => {
        const zero = (n-num.toString(2).length).toString()
        if(num.toString(2).length === n) {
           return num.toString(2)
        } else {
           return '0'.repeat(zero) + num.toString(2)
        }
    })
    
    const numArr2 = arr2.map((num) => {
        const zero = (n-num.toString(2).length).toString()
        if(num.toString(2).length === n) {
           return num.toString(2)
        } else {
           return '0'.repeat(zero) + num.toString(2)
        }
    })
   
    for(let i = 0; i < numArr1.length; i++) {
        for(let j = 0; j < numArr1.length; j++) {
            numArr1[i][j] + numArr2[i][j] > 0 ? result += '#' : result += ' '
        }
        answer.push(result)
        result = ''
    }
    return answer
}