function solution(phone_number) {
     return '*'.repeat(phone_number.length-4) + phone_number.slice(-4);
}

// !phone_number[phone_number.length -1,-2,-3,-4] ? * : x