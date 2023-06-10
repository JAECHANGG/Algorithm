function solution(a, b) {
    const c = Number(String(a) + String(b))
    const d = Number(String(b) + String(a))
    return c > d ? c : d
}