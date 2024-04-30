const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(' ').map(Number)
const numbers = input[1].split(' ').map(Number).sort((a, b) => a < b ? -1 : 1)

console.log(numbers[K - 1])
