def solution(prices):
    answer = [0 for i in range(len(prices))]
    
    for i, price in enumerate(prices):
        for j in range(i + 1, len(prices)):
            if price > prices[j]: 
                answer[i] += 1
                break
            else: answer[i] += 1
    
    return answer