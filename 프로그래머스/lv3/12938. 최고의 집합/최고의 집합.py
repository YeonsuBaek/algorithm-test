def solution(n, s):
    if n > s: return [-1]
    
    num1 = s // n
    num2 = s % n

    return [num1] * (n - num2) + [num1 + 1] * num2