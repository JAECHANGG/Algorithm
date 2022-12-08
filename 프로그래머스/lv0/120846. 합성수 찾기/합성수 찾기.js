
2
3
4
5
6
7
8
9
10
11
12
13
14
function solution(n) {
    var answer = 0;
    for(let i = 4; i <= n; i++){
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                answer += 1;
                break;
            }
        }
    }

    return answer;
}