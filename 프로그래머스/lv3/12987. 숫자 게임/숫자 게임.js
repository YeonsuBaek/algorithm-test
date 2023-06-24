function solution(A, B) {
    let answer = 0
    let Bidx = 0
    
    A.sort((a, b) => b - a)
    B.sort((a, b) => b - a)
    for (let i = 0; i <= A.length; i++) {
        if (A[i] < B[Bidx]) { 
            answer += 1
            Bidx += 1
        }
    }
    
    return answer
}