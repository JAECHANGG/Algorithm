function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a-b)
    const human = people.filter(num => num <= limit-40);
    const len = people.filter(num => num > limit-40).length;
    
//     if(human.length === 0) {
//         return len;
//     }
    
//     if(human.length === 1) {
//         return 1 + len;
//     }
    // [50,50,50,50,60,60,60,60,70,70,80,80,90,90] 12
    
    for(let i=0; i<human.length; i++) {
        for(let j=human.length-1; j>i; j--) {
            if(human[i] + human[j] <= limit) {
                    human.splice(j, 1)
                    break;
            }
            
            // if(i === j) break;
            
            // if(i === j) {
            //     answer++;
            // }
            // answer++;
        }
        // console.log(human)
    }
    answer += human.length;
    return answer + len;
}