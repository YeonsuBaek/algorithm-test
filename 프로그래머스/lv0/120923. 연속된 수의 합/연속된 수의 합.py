def solution(num, total):
    result = []
    center = int(total / num)
    start = center - int((num - 1) / 2)
    for n in range(0, num):
        result.append(start + n);
    return result