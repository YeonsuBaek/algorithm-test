def solution(name):
    if set(name) == {'A'}: return 0

    answer = float('inf')
    for i in range(len(name) // 2):
        to_right = name[-i:] + name[:-i]
        to_left = name[i:] + name[:i]
        to_left = to_left[0] + to_left[:0:-1]
        
        for j in [to_right, to_left]:
            while j[-1] == 'A':
                j = j[:-1]
                
            cursor = i + len(j) - 1
            alphabet = 0
            
            for word in list(j):
                alphabet += min(ord(word) - 65, 91 - ord(word))
        
            answer = min(answer, cursor + alphabet)
            
    return answer