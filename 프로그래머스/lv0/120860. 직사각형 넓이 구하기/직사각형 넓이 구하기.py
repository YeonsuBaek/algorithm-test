def solution(dots):
    startX, endX = [256, -256]
    startY, endY = [256, -256]
    
    for dot in dots:
        x, y = dot
        if x < startX:
            startX = x
        if x > endX:
            endX = x
        if y < startY:
            startY = y
        if y > endY:
            endY = y
    return abs(startX - endX) * abs(startY - endY)