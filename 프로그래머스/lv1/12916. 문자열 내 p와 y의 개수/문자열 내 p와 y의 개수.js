function solution(s){
    s = s.toLowerCase().split("")
    let p = s.filter(el => el === "p").length
    let y = s.filter(el => el === "y").length
    return p === y || (p < 1 && y < 1) ? true : false
}

// 반복문으로 p와 y의 개수를 파악한다.
// p,y가 한개도 없거나 같으면 true 아니라면 false 반환