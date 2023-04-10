count = 0
def solution(num):
    global count
    count += 1
    next_num = num / 2 if num % 2 == 0 else num * 3 + 1
    if num == 1: return 0
    if count >= 500: return -1
    if next_num == 1: return count
    return solution(next_num)