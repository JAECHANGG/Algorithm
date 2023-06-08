function solution(nums) {
    var answer = 0;
    let arr = [];

    for(let i=0; i<nums.length-2; i++) {
        for(let j=i+1; j<nums.length-1; j++) {       
            for(let k=j+1; k<nums.length; k++) {
                let num = nums[i]+nums[j]+nums[k];
                arr.push(num)
            }
        }
    }
    
    for(let n of arr) {
        for(let i=2; i<n/2; i++) {
            if(n % i === 0) {
                n = 0;
            }
        }
        n !== 0 && answer++;
    }
    return answer;
}