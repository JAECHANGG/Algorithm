function solution(n, words) {
    const arr = [words[0]]
    let human = 1;
    let count = 1;
    
    for(let i=1; i<words.length; i++) {
        human++;
        if(i % n === 0) {
            count++;
            human = 1;
        }
        
        if(words[i-1].at(-1) !== words[i][0] || arr.includes(words[i])) {
            return [human, count]   
           }
        arr.push(words[i])
    }
    return [0, 0]
}