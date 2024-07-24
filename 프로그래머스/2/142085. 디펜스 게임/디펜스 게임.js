function solution(n, k ,enemy) {
    let left = 0
    let right = enemy.length
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (canSurvive(n, k, enemy.slice(0, mid))) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return right
    
    function canSurvive(n, k, arr) {
        if (arr.length <= k) return true
        const canAvoidSum = arr.sort((a, b) => b - a).slice(k).reduce((cur, acc) => cur + acc, 0)
        return canAvoidSum <= n
    }
}

// ❌ Combination을 사용하면 시간 초과
// function solution(n, k, enemy) {
//     if (enemy.length <= k) return enemy.length
    
//     const combinations = getCombinations(enemy, k)
    
//     let maxRound = 0
    
//     combinations.forEach((combination) => {
//         let score = n
//         let count = 0
//         for (let i = 0; i < enemy.length; i++) {
//             if (combination.includes(i)) {
//                 count++
//                 continue
//             }
//             if (score < enemy[i]) {
//                 maxRound = maxRound > count ? maxRound : count
//                 break
//             }
//             score -= enemy[i]
//             count++
//         }
//     })
    
//     return maxRound
    
//     function getCombinations(arr, n) {
//         const combinations = []
        
//         generateIndexCombinations(0, [])

//         function generateIndexCombinations(start, combination) {
//           if (combination.length === n) {
//             combinations.push([...combination])
//             return
//           }
//           for (let i = start; i < arr.length; i++) {
//             combination.push(i);
//             generateIndexCombinations(i + 1, combination);
//             combination.pop();
//           }
//         }

//         return combinations
//     }
// }