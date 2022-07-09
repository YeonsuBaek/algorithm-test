#include <stdio.h>

int main() {
    int n, x, a, i;
    
    scanf("%d %d", &n, &x);
    
    for (i = 1; i <= n; i++) {
        scanf("%d", &a);
        
        if (x > a) {
            printf("%d ", a);
        }
    }
    
    return 0;
}