function solution(rsp) {
    let answer = []
    let arr = rsp.split("")
    for (let i = 0; i<arr.length; i++) {
        if(arr[i] === "2") answer.push("0")
        else if (arr[i] === "0") answer.push("5")
        else answer.push("2")
    }
    return answer.join("")
}