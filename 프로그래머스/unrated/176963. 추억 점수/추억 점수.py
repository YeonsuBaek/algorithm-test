def solution(name, yearning, photo):
    score_list = [0 for score in photo]
    
    for i, people in enumerate(photo):
        for person in people:
            if person in name:
                score_list[i] += yearning[name.index(person)]
    
    return score_list