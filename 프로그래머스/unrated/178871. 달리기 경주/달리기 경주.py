def solution(players, callings):
    rank = dict()
    
    for i, player in enumerate(players):
        rank[player] = i
        
    for calling in callings:
        prev, curr = rank[calling] - 1, rank[calling]
        rank[players[prev]] = curr
        rank[players[curr]] = prev
        players[prev], players[curr] = players[curr], players[prev]

    return players
