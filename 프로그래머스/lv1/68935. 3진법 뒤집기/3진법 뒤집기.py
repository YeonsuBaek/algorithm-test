def convertTernary(number):
    answer = []
    while number > 0:
        number, mod = divmod(number, 3)
        answer.append(str(mod))
    return ''.join(answer)

def solution(n):
    reverseTernary = convertTernary(n)
    return int(reverseTernary, 3)
