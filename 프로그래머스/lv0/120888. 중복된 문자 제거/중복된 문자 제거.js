function solution(my_string) {
    return my_string.split("").filter((el, index) => my_string.indexOf(el) === index).join("")
}