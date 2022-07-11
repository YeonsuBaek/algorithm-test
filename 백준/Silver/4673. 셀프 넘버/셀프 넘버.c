#include <stdio.h>

int sum(int n) {
    int sum = n;
    
    while(n > 0) {
        sum += n%10;
        n /= 10;
    }

    return sum;
}

int main() {
    int i, arr[10001];
    
    for (i = 1; i < 10001; i++) {
        sum(i);
        
        if (sum(i) < 10001) {
            arr[sum(i)] = 1;
        }
    }
    
    for (i = 1; i <= 10000; i++) {
        if (arr[i] != 1) {
            printf("%d\n", i);
        }
    }
    
    return 0;
}