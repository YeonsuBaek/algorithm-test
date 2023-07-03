function solution(begin, target, words) {
    if (!words.includes(target)) return 0
    
    answer = 100
    
    dfs(begin, 0, [])
    
    function dfs(current, count, history) {
        if (current === target) {
            answer = answer < count ? answer : count
            return
        }
        if (history.length === words.length) return
        newWords = words.filter((word) => !history.includes(word))
        newWords.forEach((word) => {
            differentCount = 0
            for (let i = 0; i <= word.length; i++) {
                if (word[i] !== current[i]) differentCount += 1
            }
            history.push(current)
            if (differentCount === 1) dfs(word, count + 1, history)
        })
    }
    
    return answer
}