function solution(arr) {
   let min = Math.min(...arr)
   if (arr.length <= 1) return [-1]
   else return arr.filter(el => el !== min)
}

// 첫번째 방법 ( 틀림 )
// sort로 정렬하고 0번째 인덱스 제거
// 만약 10이라면 -1 리턴!

// 두번째 방법
// filter로 Math.min()써서 거른다.
// 10일때면 -1 리턴!