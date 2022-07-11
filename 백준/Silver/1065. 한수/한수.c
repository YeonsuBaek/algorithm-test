#include <stdio.h>

int sum(int n) {
    int hund, ten, one, i;
    int count = 0;
    
    if (n >= 100) {
        count = 99;
        for (i = 100; i <= n; i++) {
            hund = i / 100;
            ten = (i % 100) / 10;
            one = (i % 100) % 10;
            if ((hund - ten) == (ten - one)) {
                count++;
            }
        }
    } 
    else {
        count = n;
    }
    return count;
}

int main() {
    int num, result;
    
    scanf("%d", &num);
    result = sum(num);
    
    printf("%d", result);

    return 0;
}