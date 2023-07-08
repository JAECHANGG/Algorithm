function solution(lottos, win_nums) {
    const result = { 0 : 6, 1 : 6, 2 : 5, 3 : 4, 4 : 3, 5 : 2, 6 : 1 }
    let low = 0;
    let zero = 0;
    
    for(let l of lottos) {
        if(l === 0) zero++;
        for(let i=0; i<win_nums.length; i++) {
            if(l === win_nums[i]) {
                low++;
            }
        }
    }
    let high = low + zero;
    
    return [result[high], result[low]];
}

// 최저 순위는 현재 맞는 개수를 구하면 된다.
// 최고 순위는 현재 맞는 개수 + 0의 개수를 구하면 된다.