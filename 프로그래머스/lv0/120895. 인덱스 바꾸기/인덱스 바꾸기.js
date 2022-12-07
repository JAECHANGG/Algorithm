function solution(my_strings, num1, num2) {
    let my_string = my_strings.split("")  
    let temp = my_string[num1]
      console.log(my_string[num1] = my_string[num2])
      console.log(my_string[num2] = temp)
   return my_string.join("")
      
}

// my_string[num1] = my_string[num2]
// my_string[num2] = my_string[num1]