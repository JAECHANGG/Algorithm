function solution(array) {
    array.sort(function(a, b)  {
  return a - b;
})
    let len = Math.floor(array.length / 2)
    return Math.floor(array[len])
    
}