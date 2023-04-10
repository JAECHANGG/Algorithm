function solution(s) {
    const arr = s.split(" ")
    console.log(arr)
    var answer = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i+1] !== 'Z' && arr[i] !== 'Z') {
            answer += +arr[i]
        }
    }
    return answer;
}