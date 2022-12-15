function solution(s){
    let P = 0
    let Y = 0
    let UpperCase = s.toUpperCase()
    for (let i = 0; i<=s.length; i++) {
    if (UpperCase[i] === "P") P += 1
    else if (s.toUpperCase()[i] === "Y") Y += 1
    }
    return P === Y ? true : false
}