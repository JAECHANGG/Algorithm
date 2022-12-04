function solution(my_string) {
   return my_string.split("").filter(el => !isNaN(el)).reduce((prev,cur) => prev + Number(cur), 0)
}