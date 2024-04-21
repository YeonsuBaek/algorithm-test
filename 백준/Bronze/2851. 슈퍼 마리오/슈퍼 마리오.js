const fs = require('fs');
const scores = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(str => Number(str));

let sum = 0
for (let i = 0; i < scores.length; i++) {
    sum += scores[i]
    const nextSum = sum + scores[i + 1]
    
    if (Math.abs(100 - sum) < Math.abs(100 - nextSum)) {
        break
    }
}
console.log(sum)