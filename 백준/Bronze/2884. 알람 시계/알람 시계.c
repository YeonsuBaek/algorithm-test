#include <stdio.h>

int main() {
    int hour, min, time;
    
    scanf("%d %d", &hour, &min);
    
    if (hour == 0) {
        if (min >= 45) {
            min -= 45;
        }
        else if (min < 45) {
            hour = 23;
            min = min + 60 - 45;
        }
    }
    else if (hour > 0) {
        if (min >= 45) {
            min -= 45;
        }
        else if (min < 45) {
            hour -= 1;
            min = min + 60 - 45;
        }
    }
    printf("%d %d", hour, min);
    
    return 0;
}

    // 1. hour == 0일 때
    // 1-1. min >= 45 일 때
    // 1-2. min < 45 일 때
    // 2. hour > 0일 때
    // 2-1. min >= 45 일 때
    // 3-2. min < 45 일 때