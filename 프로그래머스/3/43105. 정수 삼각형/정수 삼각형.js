function solution(triangle) {
    let dp = [...triangle]
    
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                dp[i][j] = triangle[i][j] + dp[i - 1][j]
            } else if (j === i) {
                dp[i][j] = triangle[i][j] + dp[i - 1][i - 1]
            } else {
                dp[i][j] = triangle[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j])
            }
        }
    }
    
    return Math.max(...dp[triangle.length - 1])
}
