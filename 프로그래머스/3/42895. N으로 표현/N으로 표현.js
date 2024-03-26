function solution(N, number) {
    if (N == number) return 1
    
    let useNumbers = Array.from({ length: 9 }, () => new Set())
    for (let i = 1; i <= 8; i++) {
        useNumbers[i].add(Number(String(N).repeat(i)))
    }
    
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= i; j++) {
            for (const first of useNumbers[j]) {
                for (const second of useNumbers[i - j]) {
                    useNumbers[i].add(first + second)
                    useNumbers[i].add(first * second)
                    useNumbers[i].add(Math.floor(first / second))
                    useNumbers[i].add(first - second)
                }
            }
            if (useNumbers[i].has(number)) return i
        }
    }
    
    return -1
}