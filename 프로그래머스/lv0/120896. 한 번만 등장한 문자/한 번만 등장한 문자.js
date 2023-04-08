function solution(s) {

    const a = s.split("").sort().join("")
    var b = ""
    for(let i = 0;i<a.length;i++){
        if(a[i] != a[i-1] && a[i] != a[i+1]){
            b += a[i]
        }
    }
    return b;
}