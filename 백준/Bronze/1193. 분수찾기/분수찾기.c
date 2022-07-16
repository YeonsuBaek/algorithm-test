#include <stdio.h>

int fraction(int k) {
    return (k * (k + 1) / 2);
}

int main() {
    int X, i, num, num1, num2;
    
    scanf("%d", &X);
    
    for (i = 1; ; i++) {
        if (fraction(i - 1) < X && X <= fraction(i)) {
            num = X - fraction(i - 1);
            break;
        }
    }   
    
    if (i % 2 != 0) {
        num1 = i - (num - 1);
        num2 = num;
    } else {
        num1 = num;
        num2 = i - (num - 1);
    }
    
    printf("%d/%d", num1, num2);
    
    return 0;
}