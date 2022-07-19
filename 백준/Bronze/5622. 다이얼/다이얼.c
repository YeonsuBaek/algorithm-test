#include <stdio.h>

int main() {
    char alphabet[15];
    int i, count = 0;
    
    scanf("%s", &alphabet);
    
    for (i = 0; i < strlen(alphabet); i++) {
        if (alphabet[i] >= 65 && alphabet[i] <= 67) {
            count += 3;
        }
        if (alphabet[i] >= 68 && alphabet[i] <= 70) {
            count += 4;
        }
        if (alphabet[i] >= 71 && alphabet[i] <= 73) {
            count += 5;
        }
        if (alphabet[i] >= 74 && alphabet[i] <= 76) {
            count += 6;
        }
        if (alphabet[i] >= 77 && alphabet[i] <= 79) {
            count += 7;
        }
        if (alphabet[i] >= 80 && alphabet[i] <= 83) {
            count += 8;
        }
        if (alphabet[i] >= 84 && alphabet[i] <= 86) {
            count += 9;
        }
        if (alphabet[i] >= 87 && alphabet[i] <= 90) {
            count += 10;
        }
    }
    
    printf("%d", count);
    
    return 0;
}