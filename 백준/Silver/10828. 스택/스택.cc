#include <iostream>
#include <string>
#include <stack>
using namespace std;

int main() {
    int N, num;
    string state;
    stack<int> stack;
    
    cin >> N;
    
    for (int i = 0; i < N; i++) {
        cin >> state;
        
        if (state == "push") {
            cin >> num;
            stack.push(num);
        }
        else if (state == "pop") {
            if (stack.empty()) {
                cout << "-1" << endl;
            }
            else {
                cout << stack.top() << endl;
                stack.pop();
            }
        }
        else if (state == "size") {
            cout << stack.size() << endl;
        }
        else if (state == "empty") {
            if (stack.empty()) {
                cout << "1" << endl;
            }
            else {
                cout << "0" << endl;
            }
        }
        else if (state == "top") {
            if (stack.empty()) {
                cout << "-1" << endl;
            }
            else {
                cout << stack.top() << endl;
            }
        }
    }
    return 0;
}