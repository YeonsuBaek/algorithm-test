// 1. A, B, C 입력 받음
// 2. 세 자연수를 곱함
// 3. 곱한 값을 10으로 나눈 나머지를 구해 리스트에 넣음
// 4. 0 ~ 9 숫자가 각각 몇 개 씩 들어갔는지 반복문으로 구함

#include <stdio.h>

int main() {
    int num, i,item;
    int mul = 1;
    int list[10] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

    for (i = 0; i < 3; i++) {
        scanf("%d\n", &num);
        mul *= num;
    }
    
    for (i = 0; mul > 0 ; i++) {
        item = mul % 10;
        list[item] += 1;
        mul /= 10;
    }
    
    for (i = 0; i <= 9 ; i ++) {
        printf("%d\n", list[i]);
    }

    return 0;
}
