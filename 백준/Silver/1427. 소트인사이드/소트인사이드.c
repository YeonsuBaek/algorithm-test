#include <stdio.h>
#include <string.h>

int main() {
    char N[10], num;
    
    scanf("%s", N);
    
    int len = strlen(N);
    for (int i = 0; i < len - 1; i++) {
        for (int j = 0; j < len; j++) {
            if (N[j] < N[j + 1]) {
                num = N[j];
                N[j] = N[j + 1];
                N[j + 1] = num;
            }
        }
    }
    
    printf("%s", N);
    
    return 0;
}