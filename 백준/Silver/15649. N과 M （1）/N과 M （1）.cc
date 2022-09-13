#include <iostream>
using namespace std;

int M, N, arr[9] = {}, count;
bool visited[9] = {};

void dfs(int count) {
    if (count == M) {
        for (int i = 0; i < M; i++) {
            cout << arr[i] << ' ';
        }
        cout << '\n';
        return;
    }
    
    for (int i = 1; i <= N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            arr[count] = i;
            dfs(count+1);
            visited[i] = false;
        }
    }
}


int main() { 
    cin >> N >> M;

    dfs(0);
    
    return 0;
}