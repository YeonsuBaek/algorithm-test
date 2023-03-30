def solution(balls, share):
	return factorial(balls) / (factorial(balls - share) * factorial(share))

def factorial(number):
    answer = 1
    for i in range(1, number + 1):
        answer *= i
    return answer