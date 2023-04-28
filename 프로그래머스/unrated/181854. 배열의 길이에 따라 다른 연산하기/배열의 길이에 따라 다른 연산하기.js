function solution(arr, n) {
    return arr.map((num, idx) => {
        if(arr.length % 2 === 0) {
            if(idx % 2 !== 0) {
               return arr[idx] += n
            } else {
                return num
            }
        } else {
            if(idx % 2 === 0) {
               return arr[idx] += n
            } else {
                return num
            }
        }
    })
}