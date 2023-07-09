function solution(id_pw, db) {
    let answer = 'fail';
    for(let d of db) {
        if(id_pw[0] === d[0]) answer = 'wrong pw';
        if(id_pw[0] === d[0] && id_pw[1] === d[1]) answer = 'login'
    }
    return answer;
}