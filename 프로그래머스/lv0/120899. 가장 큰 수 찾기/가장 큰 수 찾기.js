function solution(array) {
    let answer = [];
    let max = array[0]
    let index = 0
    for(let i = 1 ; i < array.length; i ++) {
        if(max < array[i]) {
            max=array[i];
                index=i;
        }
    }
    answer.push(max)
    answer.push(index)
    return answer
}

// 가장 큰 수 정렬을 하면 되는데 하면 index 바뀐다.
// 현재 상태에서 index의 수끼리 비교해야됨.