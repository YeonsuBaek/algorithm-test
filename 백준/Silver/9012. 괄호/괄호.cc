#include <iostream>
#include <string>
#include <stack>
using namespace std;

int main() {
    int N, len;
    string vps;
    char word;
    stack<char> stack;
    
    cin >> N;
    
    for (int i = 0; i < N; i++) {
        cin >> vps;
        
        while( !stack.empty() ) stack.pop();
        
        len = (int)vps.length();
        for (int j = 0; j < len; j++) {
            word = vps[j];
            
            if (word == '(') {
                stack.push(word);
            }
            else {
                if (stack.empty()) {
                    stack.push(word);
                    break;
                }
                else {
                    stack.pop();
                }
            }
        }
        
        if (stack.empty()) {
            cout << "YES" << endl;
        }
        else {
            cout << "NO" << endl;
        }
    }
    
    return 0;
}