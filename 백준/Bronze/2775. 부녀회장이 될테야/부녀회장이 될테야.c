#include <stdio.h>

int floor(int x, int y) {
    int i, j, apart[15][15] = {0, };
    
    for (i = 0; i <= y; i++) {
        apart[0][i] = i;
    }
    
    for (i = 1; i <= x; i++) {
        for (j = 1; j <= y; j++) {
            apart[i][j] = apart[i-1][j] + apart[i][j-1];
        }
    }
    
    return apart[x][y];
}

int main() {
    int T, k, n, i, result;
    
    scanf("%d", &T);
    
    for (i = 0; i < T; i++) {
        scanf("%d", &k);
        scanf("%d", &n);
        result = floor(k, n);
        printf("%d\n", result);
    }
    
    return 0;
}