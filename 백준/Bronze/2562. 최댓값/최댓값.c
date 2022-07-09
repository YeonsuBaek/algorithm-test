#include <stdio.h>

int main() {
    int num;
    int list[num];
    int max = 0;
    int count = 0;
    
    for (int i = 0; i < 9; i++) {
        scanf("%d", &num);
        list[i] = num;
        if (num > max) {
            max = num;
            count = i + 1;
        }
    }
    printf("%d\n", max);
    printf("%d", count);
    
    return 0;
}
