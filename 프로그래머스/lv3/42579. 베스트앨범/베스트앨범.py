def solution(genres, plays):
    songs = {}
    counts = {}
    answer = []
    
    for idx, genre in enumerate(genres):
        if genre not in songs:
            songs[genre] = {}
            counts[genre] = 0
        songs[genre][idx] = plays[idx]
        counts[genre] += plays[idx]
    
    count_order = sorted(counts, key=counts.get, reverse=True)

    for order in count_order:
        song_order =  sorted(songs[order], key=songs[order].get, reverse=True)
        answer.append(song_order[0])
        if len(song_order) >= 2:
            answer.append(song_order[1])
    
    return answer