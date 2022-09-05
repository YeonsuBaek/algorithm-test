#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main() {
    int M;
    string text = "";
    stack<char> left, right;
    char commend, add;
    
    cin >> text;
    
    for (int i = 0; i < (int)text.size(); i++) {
        left.push(text[i]);
    }
    
    cin >> M;
    
    for (int i = 0; i < M; i++) {
        cin >> commend;
        
        if (commend == 'P') {
            cin >> add;
            left.push(add);
        }
        else if (commend == 'B') {
            if (!left.empty()) {
                left.pop();
            }
        }
        else if (commend == 'L') {
            if (!left.empty()) {
                right.push(left.top());
                left.pop();
            }
        }
        else if (commend == 'D') {
            if (!right.empty()) {
                left.push(right.top());
                right.pop();
            }
        }
    }
    
    for (int i = 0; !left.empty(); i++) {
        right.push(left.top());
        left.pop();
    }
    
    for (int i = 0; !right.empty(); i++) {
        cout << right.top();
        right.pop();
    }
    
    return 0;
}