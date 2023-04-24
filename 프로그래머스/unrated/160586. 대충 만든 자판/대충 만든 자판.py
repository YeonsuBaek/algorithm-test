def solution(keymap, targets):
    answer = []
    
    for target in targets:
        total = 0
        for word in target:
            indexes = []
            for key in keymap:
                idx = key.find(word)
                if idx != -1: indexes.append(idx)
            if len(indexes) == 0: 
                total = -1
                break
            else: total += min(indexes) + 1
        answer.append(total)
        
    return answer