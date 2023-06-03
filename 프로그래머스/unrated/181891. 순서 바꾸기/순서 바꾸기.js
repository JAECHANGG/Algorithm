function solution(num_list, n) {
    const slc = num_list.slice(0, n);
    num_list.splice(0, n)
    const result = num_list.push(...slc)
    return num_list;
}