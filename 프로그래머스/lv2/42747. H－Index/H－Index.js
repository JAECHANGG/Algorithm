function solution(citations) {
    citations.sort((a, b) => b - a);
    for(let i=0; i<citations.length; i++) {
        if(citations[i] === 0) {
            return 0;
        }
        
        if(citations[i] <= i) {
            return i;
        }
    }
    return citations.length;
}

// 논문 : [15, 12, 10, 8, 6, 3, 2, 1]
// index : [1, 2, 3, 4, 5, 6, 7, 8]
// 이렇게 인용된 수가 적힌 논문들이 내림차순으로 배열된다면,
// index number와 대입해서 index number보다 인용수가 큰 개수를 구하는 겁니다.
// 위의 상황에서는 index 5에 대입되는 논문 인용수가 6이고 index 6부터는 인용수가 더 적으니
// 답은 index 5가 되는 거라네요.

// 그외 테케로는
// [2] , 1
// [0] , 0
// 이 상황도 고려해주시고요.