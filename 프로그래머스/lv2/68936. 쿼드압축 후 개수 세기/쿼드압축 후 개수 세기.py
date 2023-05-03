def solution(arr):
    answer = [0, 0]

    def quad(zero, one, length):
        target = arr[zero][one]
        for i in range(zero, zero + length):
            for j in range(one, one + length):
                if arr[i][j] != target:
                    length = length // 2
                    quad(zero, one, length)
                    quad(zero, one + length, length)
                    quad(zero + length, one, length)
                    quad(zero + length, one + length, length)
                    return
        answer[target] += 1
    
    quad(0, 0, len(arr))
    return answer