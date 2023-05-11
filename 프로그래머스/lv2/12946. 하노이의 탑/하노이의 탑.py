def solution(n):
    answer = []
    
    def hanoi(begin, end, middle, n):
        if n == 1:
            answer.append([begin, end])
        else:
            hanoi(begin, middle, end, n - 1)
            hanoi(begin, end, middle, 1)
            hanoi(middle, end, begin, n - 1)
    
    hanoi(1, 3, 2, n)
    return answer