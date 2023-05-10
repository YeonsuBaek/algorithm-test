function solution(sequence, k) {
    let result = []
    let prefix = [0]
    let max = Infinity
    
    sequence.forEach((num, idx) => {
        prefix.push(num + prefix[idx])
    })
    
    let [first, second] = [0, 0]
    
    while (first <= second) {
        let sum = prefix[second] - prefix[first]
        
        if (sum == k) {
            let now = second - first - 1
            
            if (max > now) {
                result = [first, second - 1]
                max = now
            }
        }
        
        if (sum < k) second += 1
        else first += 1
    }
    
    return result
}

