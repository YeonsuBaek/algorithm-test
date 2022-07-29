#include <stdio.h>
int factorial(int num) {
    if (num <= 1) {
        return 1;
    }
    
    return num * factorial(num - 1);
}


int main() {
    int n, result;
    
    scanf("%d", &n);
    
    result = factorial(n);
    
    printf("%d", result);
    
    return 0;
}