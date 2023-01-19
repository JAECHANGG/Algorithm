function solution(numbers) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i < num.length; i++){
  // 만약 split("one") 라면 [ '', 'twothreefourfivesixseveneightnine' ]
  // .join(i), i=1 라면, 나뉘어진 부분에 1이 들어가서 문자열로 합쳐진다. '1twothreefourfivesixseveneightnine' 
        numbers = numbers.split(num[i]).join(i)
console.log(numbers)
    }
    
    return Number(numbers)
}