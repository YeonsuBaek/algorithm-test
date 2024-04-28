const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number)
const scores = input[1].split(' ').map(Number)
const students = input.slice(2)

let winner = Infinity
let maxScore = 0
for (let i = 0; i < M; i++) {
    const [num, ...score] = students[i].split(' ')
    const sumScore = score.reduce((acc, cur, idx) => {
        if (cur === 'O') {
            acc += scores[idx]
        }
        return acc
    }, 0)
    
    if (maxScore < sumScore || (maxScore === sumScore && winner > Number(num))) {
        winner = Number(num)
        maxScore = sumScore
    }
}

console.log(winner + ' ' + maxScore)