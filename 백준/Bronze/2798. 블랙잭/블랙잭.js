const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(' ').map(str => Number(str))
const list = input[1].split(' ').map(str => Number(str)).sort((a, b) => a <= b ? 1 : -1)
let max = 0
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            const sum = list[i] + list[j] + list[k]
            if (sum <= m && sum > max) {
                max = sum
            }
        }
    }
}
console.log(max)