def solution(s):
    if len(s) != 4 and len(s) != 6: return False
    for i in list(s):
        if not i.isdigit(): return False
    return True