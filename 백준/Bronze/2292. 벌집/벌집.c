#include <stdio.h>

int bee(int num) {
    if (num == 1) {
        return 1;
    } else {
        return (6 * (num - 1) + bee(num - 1));
    }
}

int main() {
    int N, i;
    
    scanf("%d", &N);
    
    for (i = 1; ; i++) {
        bee(i);
        bee(i + 1);
        
        if (bee(i) < N && N <= bee(i + 1)) {
            printf("%d", i + 1);
            break;
        } else if (bee(i) == N) {
            printf("%d", i);
            break;
        }
    }
    
    return 0;
}