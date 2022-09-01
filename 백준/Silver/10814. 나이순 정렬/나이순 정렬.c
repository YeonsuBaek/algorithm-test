#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int age;
    char name[101];
    int index;
} person;

int compare(const void *first, const void *second) {
    person A = *(person *)first;
    person B = *(person *)second;
    
    if (A.age > B.age) {
        return 1;
    }
    
    else if (A.age == B.age) {
        if (A.index > B.index) {
            return 1;
        }
        else {
            return -1;
        }
    }
    
    return -1;
}

int main() {
    int N;
    
    scanf("%d", &N);
   
    person people[N];
    
    for (int i = 0; i < N; i++) {
        scanf("%d %s", &people[i].age, people[i].name);
        people[i].index = i; 
    }
    
    qsort(people, N, sizeof(person), compare);
    
    for (int i = 0; i < N; i++) {
        printf("%d %s\n", people[i].age, people[i].name);
    }
    
    return 0;
}