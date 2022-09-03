#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int location;
    int index;
    int order;
} line;

int compareLocation(const void *a, const void *b) {
    line A = *(line *)a;
    line B = *(line *)b;
    
    if (A.location > B.location) {
        return 1;
    }
    else {
        return -1;
    }
}

int compareIndex(const void *a, const void *b) {
    line A = *(line *)a;
    line B = *(line *)b;
    
    if (A.index > B.index) {
        return 1;
    }
    else {
        return -1;
    }
}

int main() {
    int N;
    
    scanf("%d", &N);
    
    line arr[N];
    
    for (int i = 0; i < N; i++) {
        scanf("%d", &arr[i].location);
        arr[i].index = i;
    }
    
    qsort(arr, N, sizeof(line), compareLocation);

    for (int i = 0; i < N; i++) {
        if (i == 0) {
            arr[i].order = 0;
        }
        else if (arr[i - 1].location == arr[i].location) {
            arr[i].order = arr[i - 1].order;
        }
        else {
            arr[i].order = arr[i - 1].order + 1;
        }
    }
    
    qsort(arr, N ,sizeof(line), compareIndex);
    
    for (int i = 0; i < N; i++) {
        printf("%d ", arr[i].order);
    }
    
    return 0;
}