function solution(s)
{
    if (s === s.split('').reverse().join('')) return s.length
    
    let answer = 1
    const palindromes = []
    
    for (let i = 0; i < s.length; i++) {
        palindromes.push([])
        for (let j = 0; j < s.length; j++) {
            palindromes[i].push(false)
        }
    }
    
    palindromes.forEach((palindrome, index) => {
        palindrome[index] = true
    })
    
    palindromes.forEach((palindrome, index) => {
        if (index < s.length - 1 && s[index] === s[index + 1]) {
            palindrome[index + 1] = true
            answer = 2
        }
    })
    
    for (let count = 3; count <= s.length; count++) {
        for (let start = 0; start <= s.length - count; start++) {
            const end = start + count - 1
            if (palindromes[start + 1][end - 1] && s[start] === s[end]) {
                palindromes[start][end] = true
                answer = count
            }
        }
    }
    
    return answer
}

