#include <stdio.h>

int main() {
    int N, count = 1, i, num, flag;
    
    scanf("%d", &N);
    
    if (N == 1) {
        i = 666;
    } else {
        for (i = 667;; i++) {
            num = i;
            flag = 0;
        
            while (num) {
                if (num % 1000 == 666) {
                    flag = 1;       
                }
                
                num /= 10;
            }
            
            if (flag) {
                count++;
                
                if (count == N) {
                    break;
                }
            }
        }
    }
    
    
    
    printf("%d", i);
    
    return 0;
}