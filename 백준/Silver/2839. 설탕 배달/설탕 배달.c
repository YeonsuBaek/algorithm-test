#include <stdio.h>

int main() {
    int N, x, y, min = 5000;
    
    scanf("%d", &N);
 
   for(x = 0; ; x++) {
       for (y = 0; ; y++) {
           if ((3 * x + 5 * y) == N && (x + y) < min) {
               min = x + y;
           }
           
           if ((3 * x + 5 * y) > N) {
               break;
           }
       }
       
       if ((x + y) > min) {
           break;
       }
   }
    
    if (min == 5000) {
        printf("-1");
    }
    
    else {
        printf("%d", min);
    }
    
    return 0;
}