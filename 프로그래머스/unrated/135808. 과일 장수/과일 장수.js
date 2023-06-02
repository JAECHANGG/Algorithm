function solution(k, m, score) {
    let answer = 0;
    const sortedScore = score.sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}

// 정렬하고 m개씩 차례대로 자른다.
// 자른값의 arr[0] * m
// 다 더하기