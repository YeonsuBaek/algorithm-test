// 1. 숫자의 개수 입력 받기
// 2. 개수만큼 숫자들 입력 받기 반복문
// 3. 가장 큰 수와 작은 수 0으로 초기화
// 4. 배열 하나씩 비교해서 큰 수와 작은 수 대입

#include <stdio.h>

int main() {
    int num, item, i;
    int largest = -1000001;
    int smallest = 1000001;

    scanf("%d", &num);
    
    for (i = 0; i < num; i++) {
        scanf("%d", &item);
        
        if (largest < item) {
            largest = item;
        }
        if (smallest > item) {
            smallest = item;
        }
    }
    printf("%d %d", smallest, largest);
    
    return 0;
}