def solution(s):
    numbers = []
    slist = s.split(' ')
    
    for number in slist:
        if number == 'Z':
            numbers.pop()
        else:
            numbers.append(number)
            
    sum = 0
    for number in numbers:
        sum += int(number)
    
    
    return sum