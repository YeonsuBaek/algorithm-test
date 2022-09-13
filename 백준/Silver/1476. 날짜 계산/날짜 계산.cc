#include <iostream>
using namespace std;

int main() {
    int E, S, M, result = 1;
    
    cin >> E >> S >> M;
    
    while(1) {
        if ((result - E) % 15 == 0 && (result - S) % 28 == 0 && (result - M) % 19 == 0) {
            cout << result;
            break;
        }
        else {
            result++;
        }
    }
    
    return 0;
}