// 과목의 갯수를 리스트 내 아이템 갯수로 설정
// 아이템 갯수만큼 성적 입력
// 반복문으로 최고 점수를 구해 점수 조작
// 새로운 평균 구하기

#include <stdio.h>

int main()
{
    int num;
    int max = 0;
    float avg = 0;

    scanf("%d", &num);

    int score[num];

    for (int i = 0; i < num; i++) {
        scanf("%d", &score[i]);
        if (max < score[i]) {
            max = score[i];
        }
    }

    for (int i = 0; i < num; i++) {
        avg += (float)score[i] / max * 100;
    }

    printf("%f\n", avg / num);

    return 0;
}