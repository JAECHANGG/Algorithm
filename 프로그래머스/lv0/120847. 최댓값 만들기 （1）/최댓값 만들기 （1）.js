const solution = (numbers) => numbers.sort((a,b) => b-a)[0]*numbers.sort((a,b) => b-a)[1]

// 1. 최대값을 찾는다
// 2. 2번 째로 큰 수를 찾는다.
// 3. 곱한다.