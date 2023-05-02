function solution(num_list) {
    let num1 = '';
    let num2 = '';
    num_list.map((num) => num % 2 === 0 ? num1 += num : num2 += num)
    return +num1 + +num2
}