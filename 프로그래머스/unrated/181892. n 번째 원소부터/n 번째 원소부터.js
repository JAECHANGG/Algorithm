function solution(num_list, n) {
    return num_list.filter((num, idx) => n-1 <= idx)
}