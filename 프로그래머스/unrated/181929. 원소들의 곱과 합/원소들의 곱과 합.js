function solution(num_list) {
    const add = num_list.reduce((acc, cur) => acc + cur, 0)
    const mul = num_list.reduce((acc, cur) => acc * cur);
    
    return add*add > mul ? 1 : 0;
}