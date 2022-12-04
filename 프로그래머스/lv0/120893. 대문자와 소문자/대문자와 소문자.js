function solution(my_string) {
   let answer = ""
   let array = my_string.split("")
   for (arr of array) {
       if(arr === arr.toUpperCase()) answer += arr.toLowerCase()
       else answer += arr.toUpperCase()
   }
    return answer
}

// 배열로 만든다.
// 소문자와 대문자를 판별한다.
// 소문자는 대문자로 대문자는 소문자로 바꿔준다.
// 바꿔준 값을 빈 문자열에 넣어준다.
