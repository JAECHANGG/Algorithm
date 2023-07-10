function solution(a, b) {
    const add = Number(a+"" + b+"");
    const multiply = a * b * 2;
    return add > multiply ? add : multiply;
}