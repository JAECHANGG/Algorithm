function solution(quiz) {
    var answer = [];
    for(let i=0; i<quiz.length; i++) {
        const expression = quiz[i].split(" ");
        if(expression[1] === "-") {
            if(Number(expression[0]) - Number(expression[2]) === Number(expression[4])) {
               answer.push("O");
               } else {
                   answer.push("X");
               }
        } else if(expression[1] === "+") {
            if(Number(expression[0]) + Number(expression[2]) === Number(expression[4])) {
               answer.push("O");
               } else {
                   answer.push("X");
               }
        }
    }
    return answer;
}