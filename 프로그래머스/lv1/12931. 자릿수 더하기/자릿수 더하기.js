function solution(n)
{
    var answer = 0;
    n = n.toString();
    console.log(n)
    for (let i=0; i<n.length; i++){
        answer += parseInt(n[i])
        console.log(n[i])
    }

    return answer;
}