def solution(array):
    count = 0
    
    for number in array:
        for n in list(map(int, str(number))):
            if n == 7:
                count += 1
    
    return count