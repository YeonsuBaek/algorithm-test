#include <iostream>
#include <string>
using namespace std;

int main() {
    int A, B, C, D;
    long long result;
    string E, F;
    
    cin >> A >> B >> C >> D;
    
    E = to_string(A) + to_string(B);
    F = to_string(C) + to_string(D);
    
    result = stoll(E) + stoll(F);
    
    cout << result;
    
    return 0;
}