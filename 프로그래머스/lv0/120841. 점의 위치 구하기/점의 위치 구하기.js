function solution(dot) {
    if(dot[0] > 0 && dot[1] > 0){
        return 1
    } else if(dot[0] < 0 && dot[1] > 0){
        return 2
    } else if(dot[0] < 0 && dot[1] < 0){
        return 3
    } else {
        return 4
    }
    
}

// 1. if문을 사용해서 조건에 맞게 리턴해준다.