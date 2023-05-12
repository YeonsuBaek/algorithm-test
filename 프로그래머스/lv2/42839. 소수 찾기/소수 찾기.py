import itertools

def solution(numbers):
    num_list = list(numbers)
    total = []
    result = []
    
    for i in range(1, len(numbers) + 1):
        permutations = itertools.permutations(num_list, i)
        for permutation in permutations:
            total.append(int(''.join(map(str, permutation))))
    total = list(set(total))
    
    for i in total:
        if i > 1:
            isPrime = True
            for j in range(2, i):
                if i % j == 0: 
                    isPrime = False
                    break
            if isPrime == True:
                result.append(i)
                
    return len(result)