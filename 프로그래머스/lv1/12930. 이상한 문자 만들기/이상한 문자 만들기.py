def solution(s):
    s = list(s)
    index = 0
    for i in range(len(s)):
        if s[i] == ' ': 
            index = 0
            continue
        s[i] = s[i].upper() if index % 2 == 0 else s[i].lower()
        index += 1
    return ''.join(s)