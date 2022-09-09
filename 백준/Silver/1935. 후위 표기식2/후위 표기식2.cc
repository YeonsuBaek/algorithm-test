#include <iostream>
#include <string>
#include <stack>
using namespace std;

int main() {
    int N, alphabet[26] = {};
    double a, b, result;
    string exp;
    stack<double> stack;
    
    cin >> N;
    cin >> exp;
    
    for (int i = 0; i < N; i++) {
        cin >> alphabet[i];
    }
    
    for (int i = 0; i < exp.length(); i++) {
        if (exp[i] == '+' || exp[i] == '-' || exp[i] == '*' || exp[i] == '/') {
            a = stack.top();
            stack.pop();
            b = stack.top();
            stack.pop();
            
            switch(exp[i]) {
                case '+':
                    stack.push(b + a);
                    break;
                case '-':
                    stack.push(b - a);
                    break;
                case '*':
                    stack.push(b * a);
                    break;
                case '/':
                    stack.push(b / a);
                    break;
            }
        }
        else {
            stack.push(alphabet[exp[i] - 'A']);
        }
    }
    
    result = stack.top();
    
    cout << fixed;
    cout.precision(2);
    
    cout << result << '\n';
    
    return 0;
}