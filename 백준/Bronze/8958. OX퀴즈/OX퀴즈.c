// 테스트 케이스 개수만큼 배열 초기화
// 문자 입력 받음
// 문자가 O일 때 카운트+1
// 다음 문자도 O일 때 카운트+2...
// 이전 문자가 X였을 때 카운트+1

#include <stdio.h>

int main() {
    int num, count, score;
    char item[800];
    
    scanf("%d", &num);
    
    for (int i = 0; i < num; i++) {
        count = 0;
        score = 1;
        scanf("%s", item);
        
        for (int j = 0; j < strlen(item) ; j++) {
            if (item[j] == 'O') {
                count+=score;
                score++;
            }
            if (item[j] == 'X') {
                score = 1;
            }
        }
        printf("%d\n", count);
    }
    
    return 0;
}