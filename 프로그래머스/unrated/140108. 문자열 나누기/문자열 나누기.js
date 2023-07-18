function solution(s) {
    var selectString = '';
    let answer = 0;
    let sameCount = 0;
    let anotherCount = 0;
    for(let string of s) {
        if(selectString === string) sameCount++;
        if(selectString === '') {
            selectString = string;
            sameCount++;
        }
    

        if(selectString !== string) anotherCount++;
        
        if(sameCount === anotherCount) {
            answer++;
            sameCount = 0;
            anotherCount = 0;
            selectString = '';
        }
    }
    if(sameCount !== anotherCount) answer++;
    return answer;
}

// selectString === '' {string = selectString}
// sameCount++;
// string !== selectString {anotherCount++;}
// sameCount === anotherCount {answer++; sameCount = 0; anotherCount = 0; selectString = ''}
// string = selectString