function solution(price) {
    if (price < 100000) return price
    else if (price >= 100000 && price < 300000) {
        return Math.floor(price - price * 0.05)
    } else if (price >= 300000 && price < 500000) {
        return Math.floor(price - price * 0.1)
    } else if (price >= 500000) {
        return Math.floor(price - price * 0.2)
    }
}

// if문 활용, 순서대로 코드가 실행되므로 논리 연산자를 써야함
// 조건에 맞게 price(원래 가격) - price * %(할인 가격) 해줘서 리턴