#include <iostream>
using namespace std;

int main() {
    int N, result;
    
    cin >> N;
   
    result = 0;
    for (int i = 1; i <= N; i *= 10) {
        result += N - i + 1;
    }
    
    cout << result;
    
    return 0;
}