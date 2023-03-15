function solution(x, y, n) {
    if (x >= y) return 0;
    
    const dp = new Array(y + 1).fill(y + 1);
    dp[x] = 0;
    
    for (let i = x + 1; i <= y; i++) {
        if (x <= i - n) dp[i] = Math.min(dp[i], dp[i - n] + 1);
        if (i % 2 === 0 && i / 2) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        if (i % 3 === 0 && i / 3) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    
    return dp[y] === y + 1 ? -1 : dp[y];
}