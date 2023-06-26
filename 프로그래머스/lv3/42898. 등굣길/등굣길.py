def solution(m, n, puddles):
    m, n = n, m
    arr = [[0 for j in range(n + 1)] for i in range(m + 1)]
    dp = [[0 for j in range(n + 1)] for i in range(m + 1)]
    
    for x, y in puddles:
        arr[y][x] = 1
        dp[1][1] = 1
        
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if i == 1 and j == 1: continue
            if arr[i][j] == 1: continue
                
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
                
    return dp[m][n] % 1000000007
