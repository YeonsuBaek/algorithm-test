const fs = require('fs');
const list = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = list[0].split(' ').map(Number)
let squares = Array.from(Array(100), () => Array(100).fill(0))

for (let i = 1; i < list.length; i++) {
    const [x1, y1, x2, y2] = list[i].split(' ').map(Number)
    
    for (let x = x2; x >= x1; x--) {
        for (let y = y2; y >= y1; y--) {
            squares[x - 1][y - 1] += 1
        }
    }
}

let count = 0
for (let row of squares) {
    for (let val of row) {
        if (val > M) {
            count++
        }
    }
}
console.log(count)