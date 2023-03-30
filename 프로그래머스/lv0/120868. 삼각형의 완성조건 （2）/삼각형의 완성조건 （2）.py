def solution(sides):
    side1, side2 = [max(sides), min(sides)]
    count = 0
    for side in range(side1 - side2 + 1, side1 + side2):
        count += 1
    return count