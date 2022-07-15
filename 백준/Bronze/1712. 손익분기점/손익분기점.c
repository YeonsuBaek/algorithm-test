#include <stdio.h>

int main() {
    int A, B, C, num;
    
    scanf("%d %d %d", &A, &B, &C);
    
    if (B >= C) {
        num = -1;
    } else {
        num = A / (C - B) + 1;
    }
    
    printf("%d", num);
    
    return 0;
}