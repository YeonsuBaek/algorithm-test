function solution(weights) {
    let count = 0
    let weightMap = {}
    const balances = [1, 3/2, 2, 4/3]
    
    weights.sort((a, b) => b - a).forEach((weight) => {
        balances.forEach((balance) => {
            const pairWeight = weight * balance
            if (weightMap[pairWeight]) {
              count += weightMap[pairWeight];
            }
        })
        if (!weightMap[weight]) weightMap[weight] = 1
        else weightMap[weight] += 1
    })
    
    return count
}
