function solution(numbers) {
    const result = numbers.map(number => number.toString()).sort((a, b) => {
        if (Number(a + b) > Number(b + a)) return -1
    }).join('')
    
    if (Number(result) === 0) return '0'
    return result
}
