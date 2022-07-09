// 생각
// 1. 0~99 사이 정수를 입력 받음
// 2. 십의 자리와 일의 자리 수를 분리
// 3. 두 수의 합을 구하고 일의 자리만 남김
// 4. 각 일의 자리수 끼리 더함
// 2~4를 처음 입력 받은 수가 나올 때까지 반복

#include <stdio.h>

int main() {
    int num, n1, n2, n3, sum, result;
    int count = 0;
    
    scanf("%d", &num);
    result = num;
    
    while(1) {
        n1 = num / 10;
        n2 = num % 10;
        n3 = (n1 + n2) % 10;
        sum = (n2 * 10) + n3;
        num = sum;
        count++;
        if (num == result) break;
    }
    
    printf("%d", count);
    
    return 0;
}