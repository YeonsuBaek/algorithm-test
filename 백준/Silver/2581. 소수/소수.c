#include <stdio.h>

int main() {
    int m, n, count = 0, smallest, flag;
    
    scanf("%d", &m);
    scanf("%d", &n);
    
    for (int i = m; i <= n; i++) {
        flag = 0;
        
        if (i == 1) {
            continue;
        }

        for (int j = 2; j < i ; j++) {
                if (i % j == 0) {
                    flag = 1;
                }
            }
        
        if (flag == 0) {
            if (count == 0) {
                smallest = i;
            }
            
            count += i;
        }
    }
    
    if (count == 0) {
        printf("-1\n");
    } else {
        printf("%d\n%d", count, smallest);
    }

    return 0;
}