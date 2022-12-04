function solution(n) {
   if(Math.sqrt(n) % 1 === 0 ) return 1
    else return 2
}

// sqrt를 써서 제곱수라면 소수점 아래자리가 없다.
// 따라서 나머지가 0 일때 제곱수라는 말