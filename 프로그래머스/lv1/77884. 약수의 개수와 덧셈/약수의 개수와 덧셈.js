function solution(left, right) {
    let num = 0;
    let num2 = 0;
    for(let i = left; i<=right; i++) {
        num = 0
        for (let j = 1; j<= i; j++) {
            if(i % j === 0) {
                num += 1
            }
        }
        if(num % 2 === 0) {
            num2 = num2 + i
        } else num2 = num2 - i
    } 
        return num2
}

// left부터 right까지 약수의 개수를 차례대로 구한다.