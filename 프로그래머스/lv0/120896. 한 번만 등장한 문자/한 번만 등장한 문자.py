def solution(s):
    deduplication = []
    answer = []
    
    for i in list(s):
        if i not in deduplication:
            deduplication.append(i)
    
    if len(deduplication) == len(s):
        answer = list(s)
    else:
        for word in deduplication:
    	    if s.count(word) == 1:
        	    answer.append(word)
    
    answer.sort()
    return "".join(answer)