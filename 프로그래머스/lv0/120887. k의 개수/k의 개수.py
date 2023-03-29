def solution(i, j, k):
    count = 0
    
    for n in range(i, j + 1):
        numbers = list(map(int, str(n)))
        if k in numbers:
            count += numbers.count(k)
    
    return count