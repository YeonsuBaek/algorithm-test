// 10개 값 입력 받기
// 42로 나눈 나머지를 배열에 저장하는 반복문
// 첫번째 나머지와 다른 나머지 비교, 두번째 나머지와 다른 나머지 비교... 끝까지 반복

#include <stdio.h>

int main() {
    int list[10], i, item, num[10], j, k;
    int count = sizeof(list)/sizeof(0);
    
    for (i = 0; i < sizeof(list)/sizeof(0); i++) {
        scanf("%d", &item);
        num[i] = item % 42;
    }
    
    for (i = 0; i < sizeof(num)/sizeof(0); i++) {
        for (j = i + 1; j < sizeof(num)/sizeof(0); j++) {
            if (num[i] == num[j]) {
                count--;
                if (i > 0) {
                    for (k = i - 1; k >= 0; k--) {
                        if (num[k] == num[i]) {
                            count++;
                            break;
                        }
                    }
                }
            }
        }
    }
    printf("%d", count);
    
    return 0;
}