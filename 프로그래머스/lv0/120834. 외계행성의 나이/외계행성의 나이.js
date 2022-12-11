const str = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

function solution(age) {
    return age.toString().split("").reduce((acc, cur) => acc += str[Number(cur)], "")
}