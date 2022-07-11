#include <stdio.h>

int main() {
    int C, student;
    float total = 0;
    
    scanf("%d", &C);
    
    for (int i = 0; i < C; i++) {
        scanf("%d", &student);
        int sum = 0;
        int avg = 0;
        int count = 0;
        int score[student];
        
        for (int j = 0; j < student; j++) {
            scanf("%d", &score[j]);
            sum += score[j];
        }
        avg = sum / student;
        
        for (int k = 0; k < student; k++) {
            if (score[k] > avg) {
                count ++;
            }
        }
        total = (float)count / student * 100;
        printf("%.3f%\n", total);
        
        student = 0;
    }
    
    return 0;
}