function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b-a);
    
    for(let i=m-1; i<score.length; i+=m) {
        answer += score[i] * m
    }
    
    return answer;
}

// 정렬하고 m개씩 차례대로 자른다.
// 자른값의 arr[0] * m
// 다 더하기