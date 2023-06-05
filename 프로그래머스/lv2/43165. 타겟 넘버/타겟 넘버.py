def solution(numbers, target):
    answer = 0
    
    def dfs(number, total):
        nonlocal answer
        
        if number == len(numbers):
            if total == target: answer += 1
            return
        
        dfs(number + 1, total + numbers[number])
        dfs(number + 1, total - numbers[number])
        
    dfs(0, 0)

    return answer
