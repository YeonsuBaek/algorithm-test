var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var N = Number(input)
let dp = new Array(N).fill(0).map(() => new Array(10).fill(0))

for (let i = 1; i <= 9; i++) {
  dp[0][i] = 1
}

for (let i = 1; i < N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][1] % 1000000000
    } else if (j === 9) {
      dp[i][j] = dp[i - 1][8] % 1000000000
    } else {
      dp[i][j] = (dp[i - 1][j + 1] + dp[i - 1][j - 1]) % 1000000000
    }
  }
}

const sum = dp[N - 1].reduce((acc, cur) => (acc + cur) % 1000000000, 0)
console.log(sum)

