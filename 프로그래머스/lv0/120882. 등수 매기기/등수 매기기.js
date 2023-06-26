function solution(score) {
    const answer = [];
    const average = score.map((arr) => (arr[0] + arr[1]) / 2);
    const sorted = [...average].sort((a, b) => b - a);

    for(let i=0; i<average.length; i++) {
        for(let j=0; j<sorted.length; j++) {
            if(average[i] === sorted[j]) {
                answer.push(j+1);
                break;
            }
        }
    }

    return answer;
}