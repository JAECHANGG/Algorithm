function solution(age) {
    var answer = '';
    let str = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    let num = age.toString().split('').map(x => Number(x))
    for (let i = 0; i<num.length; i++) {
        answer += str[num[i]]
    }
    return answer;
}