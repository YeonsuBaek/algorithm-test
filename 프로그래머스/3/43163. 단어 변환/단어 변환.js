function solution(begin, target, words) {
    if (!words.includes(target)) return 0
    
    let answer = 100
    
    function dfs(word, sum, history) {
        if (word === target) {
            answer = sum < answer ? sum : answer
            return
        }
        
        const newWords = words.filter(word => !history.includes(word))
        newWords.forEach(newWord => {
            let differentCount = 0
            for (let i = 0; i < newWord.length; i++) {
                if (newWord[i] !== word[i]) {
                    differentCount++
                }
            }
            history.push(word)
            if (differentCount === 1) {
                dfs(newWord, sum + 1, history)
            }
        })
    }
    
    dfs(begin, 0, [])
    
    return answer
}