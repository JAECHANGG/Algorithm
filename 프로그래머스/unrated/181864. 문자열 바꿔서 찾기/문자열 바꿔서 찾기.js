function solution(myString, pat) {
    const string = [...myString].map((str) => str === "A" ? "B" : "A").join('')
    return string.includes(pat) ? 1 : 0
}