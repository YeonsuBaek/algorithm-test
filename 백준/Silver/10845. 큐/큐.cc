#include <iostream>
#include <queue>
#include <string>
using namespace std;

int main() {
    int N, X;
    string str;
    queue<int> queue;
    
    cin >> N;
    
    for (int i = 0; i < N; i++) {
        cin >> str;
        
        if (str == "push") {
            cin >> X;
            queue.push(X);
        }
        
        else if (str == "pop") {
            if (queue.size() == 0) {
                cout << -1 << '\n';
            } else {
                cout << queue.front() << '\n';
                queue.pop();
            }
        }
        
        else if (str == "size") {
            cout << queue.size() << '\n';
        }
        
        else if (str == "empty") {
            if (queue.size() == 0) {
                   cout << 1 << '\n';
            } else {
                cout << 0 << '\n';
            }
        }
        
        else if (str == "front") {
            if (queue.size() == 0) {
                cout << -1 << '\n';
            } else {
                cout << queue.front() << '\n';
            }
        }
        
        else if (str == "back") {
            if (queue.size() == 0) {
                cout << -1 << '\n';
            } else {
                cout << queue.back() << '\n';
            }
        }
    }
    
    return 0;
}