def solution(order):
    count = 0
    for number in list(map(int, str(order))):
        if (number == 3 or number == 6 or number == 9):
            count += 1
    return count