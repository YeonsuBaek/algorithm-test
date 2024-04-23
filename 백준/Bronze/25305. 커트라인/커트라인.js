const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, k] = input[0].split(' ').map(str => Number(str))
const x_list = input[1].split(' ').map(str => Number(str)).sort((a, b) => a > b ? -1 : 1)

console.log(x_list[k - 1])