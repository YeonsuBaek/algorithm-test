def solution(num, k):
    for i, n in enumerate(list(map(int, str(num)))):
        if n == k:
            return i + 1
        
    return -1