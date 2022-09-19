#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int N, B;
    string alphabet, str;
    
    cin >> N >> B;
    
    while(N != 0) {
        int temp = N % B;
        
        if (temp < 10) {
            str = to_string(temp);
            alphabet += str;
        } else {
            temp += 55;
            alphabet += temp;
        }
        
        N = N / B;
    }
    
    reverse(alphabet.begin(), alphabet.end());
    
    cout << alphabet;
    
    return 0;
}