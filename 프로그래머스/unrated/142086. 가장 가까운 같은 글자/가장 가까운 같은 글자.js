function solution(s) {
    let set = {};
    let ans = []
    for(let i = 0; i<s.length; i++ ){
        if(set[s[i]]){
            ans.push(i+1-set[s[i]])
            set[s[i]]=i+1;
        }
        if(!set[s[i]]){
            ans.push(-1)
            set[s[i]] = i+1;
        }
    }
    return ans;
}