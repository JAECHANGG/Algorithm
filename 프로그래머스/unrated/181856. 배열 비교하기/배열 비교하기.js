function solution(arr1, arr2) {
    if(arr1.length > arr2.length) return 1;
    if(arr1.length < arr2.length) return -1;
    if(arr1.length === arr2.length) {
        const a1 = arr1.reduce((acc, cur) => acc += cur, 0);
        const a2 = arr2.reduce((acc, cur) => acc += cur, 0);
        if(a1 > a2) return 1;
        else if(a1 < a2) return -1;
        else return 0;
    }
}