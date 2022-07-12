#include <stdio.h>

int main() {
    int num1, num2;
    int hund1, ten1, one1, hund2, ten2, one2;
    
    scanf("%d %d", &num1, &num2);
    
    hund1 = num1 / 100;
    ten1 = num1 % 100 / 10;
    one1 = num1 % 100 % 10;
    hund2 = num2 / 100;
    ten2 = num2 % 100 / 10;
    one2 = num2 % 100 % 10;
    
    num1 = one1 * 100 + ten1 * 10 + hund1;
    num2 = one2 * 100 + ten2 * 10 + hund2;
    
    if (num1 > num2) {
        printf("%d", num1);
    } else {
        printf("%d", num2);
    }
    
    return 0;
}