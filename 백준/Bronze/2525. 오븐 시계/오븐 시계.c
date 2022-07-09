// 문제
// 첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다. 
// 첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. (단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)

// 생각
// 1. 요리시간을 시와 분으로 나누기
// 2. 현재뷴+요리분 >= 60인 경우
// 3. 현재시+요리시 >= 24인 경우
// 4. 종료시각 시와 분 출력

#include <stdio.h>

int main() {
    int currHour, currMin, ovenTime, ovenHour, ovenMin, totalHour, totalMin;
    
    scanf("%d %d %d", &currHour, &currMin, &ovenTime);
    
    ovenHour = ovenTime / 60;
    ovenMin = ovenTime % 60;
    
    totalHour = currHour + ovenHour;
    totalMin = currMin + ovenMin;
    
    if (totalMin >= 60) {
        totalHour = totalHour + totalMin / 60;
        totalMin = totalMin % 60;
    }
    if (totalHour >= 24) {
        totalHour -= 24;
    }
    
    printf("%d %d", totalHour, totalMin);
    
    return 0;
}