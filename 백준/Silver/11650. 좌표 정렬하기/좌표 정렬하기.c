#include <stdio.h>
#include <stdlib.h>

typedef struct
{
    int x;
    int y;
} coord; //coord형의 구조체 선언

int compare(const void *a, const void *b)
{
    coord A = *(coord *)a; //coord형의 A로 입력받은 a를 사용할 수 있게한다.
    coord B = *(coord *)b;
    
    if (A.x > B.x) {
        return 1;
    }
    else if (A.x == B.x) {
        if (A.y > B.y)
            return 1;
        else
            return -1;
    }
   
    return -1;
}

int main()
{
    int n;
    
    scanf("%d", &n);
    
    coord arr[n];
    
    for (int i = 0; i < n; i++) {
        scanf("%d %d", &arr[i].x, &arr[i].y);
    }
    
    qsort(arr, n, sizeof(coord), compare);
    
    for (int i = 0; i < n; i++) {
        printf("%d %d\n", arr[i].x, arr[i].y);
    }
    
    return 0;
}
