def solution(cards):
    is_visited = [False for i in range(len(cards))]
    groups = []
    
    for idx, card in enumerate(cards):
        if is_visited[idx] == False:
            count = 1
            is_visited[idx] = True
            next_idx = card - 1
            
            while True:
                if is_visited[next_idx] == False:
                    count += 1
                    is_visited[next_idx] = True
                    next_idx = cards[next_idx] - 1
                else: break
            
            groups.append(count)
    
    groups.sort(reverse=True)
    
    if len(groups) <= 1: return 0
    return groups[0] * groups[1]