def solution(array, n):
    closest = 0
    closing = 100
    
    for number in array:
        currentClosing = abs(n - number)
        if currentClosing < closing:
            closest = number
            closing = abs(n - number)
        elif currentClosing == closing:
            if number < closest:
                closest = number
    
    return closest