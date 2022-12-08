function solution(keyinput, board) {
    // 나의 위치
    const pos = [0,0]
    // 방향 별 변화량
    const key = {
        up: [0,1], 
        down: [0,-1], 
        left: [-1,0], 
        right: [1,0]
    }
    // 최대 이동 가능거리
    const wall = [board[0]/2 << 0 , board[1]/2 << 0]
    keyinput.forEach(dir => {
        // 벽을 만나지 않았다면 이동
        if(Math.abs(pos[0]+key[dir][0]) <= wall[0] && Math.abs(pos[1]+key[dir][1]) <= wall[1]) {
            pos[0]+=key[dir][0]
            pos[1]+=key[dir][1]
        }
    })
    return pos
}

// function solution(keyinput, board) {
//     let x = 0;
//     let y = 0;
//     let answer = []
//     for (let i = 0; i < keyinput.length; i++) {
//          if (x <= (board[0] - 1) / 2 && x >= -(board[0] - 1) / 2 && y <= (board[1] - 1) / 2 && y >= -(board[1] - 1) / 2)
//             if (keyinput[i] === "left") x -= 1
//             else if (keyinput[i] === "right") x += 1
//             else if (keyinput[i] === "down") y -= 1
//             else y += 1
//     }
//     answer.push(x)
//     answer.push(y)
//     return answer
// }