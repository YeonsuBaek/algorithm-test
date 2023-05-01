def solution(s):
    s_list = s[2:len(s) - 2].split('},{')
    
    tuples = []
    for s_item in s_list:
        tuples.append(s_item.split(','))
        
    tuples.sort(key=len)

    result = []
    for t in tuples:
        num = 0
        if len(result) == 0: num = t
        else: num = list(set(t) - set(result))
        
        result.append(num[0]);

    return list(map(int, result))