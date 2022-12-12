function solution(x) {
   let y = x.toString().split("").reduce((acc, cur) => acc += Number(cur), 0)
   return x % y === 0 ? true : false
}

// x를 한개씩 나눈다.
// x % x[0],x[1]... === 0 이면 true 아니면 false