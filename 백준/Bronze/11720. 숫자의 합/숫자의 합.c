#include <stdio.h>

int main() {
    int num, i;
    char input[100];
    int sum = 0;
    
    scanf("%d", &num);
    scanf("%s", input);
    
    for (i = 0; input[i] != '\0'; i++) {
        int n = input[i] - '0';
        sum += n;
    }
    
    printf("%d", sum);
    
    return 0;
}