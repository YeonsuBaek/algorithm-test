def solution(before, after):
    for word in list(before):
        if word in after:
        	after = after.replace(word, '', 1)
    
    if len(after) == 0:
        return 1
    else:
        return 0