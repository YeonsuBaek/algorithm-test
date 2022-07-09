// 문제
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
// 1부터 n까지 합을 출력한다.

// 생각
// 1. n을 입력 받음
// 2. n번의 반복문 실행
// 2-1. 반복문 차례만큼 합하기

#include <stdio.h>

int main() {
    int n, i;
    int sum = 0;
    
    scanf("%d", &n);
    
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    printf("%d", sum);
    
    return 0;
}