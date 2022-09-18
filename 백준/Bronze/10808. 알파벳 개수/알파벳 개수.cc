#include <iostream>
#include <string>
using namespace std;

int main() {
    int alphabet[26] = {};
    string word;
    
    cin >> word;
    
    for (int i = 0; i < word.length(); i++) {
        alphabet[word[i] - 'a'] += 1;
    }
    
    for (int i = 0; i < 26; i++) {
        cout << alphabet[i] << ' ';
    }
    return 0;
}