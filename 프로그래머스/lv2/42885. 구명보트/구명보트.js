function solution(people, limit) {
    var answer = 0;
    const human = people.filter(num => num <= limit-40);
    const len = people.filter(num => num > limit-40).length;
    human.sort((a, b) => a-b)
    
    for(let i=0; i<human.length; i++) {
        for(let j=human.length-1; j>i; j--) {
            if(human[i] + human[j] <= limit) {
                    human.splice(j, 1)
                    break;
            }
        }
    }
    answer += human.length;
    return answer + len;
}