def solution(clothes):
    clothe_list = {}
    count = []
    
    for clothe in clothes:
        if clothe[1] not in clothe_list:
            clothe_list[clothe[1]] = []
        if clothe[0] not in clothe_list[clothe[1]]:
            clothe_list[clothe[1]].append(clothe[0])
    
    for key, value in clothe_list.items():
        count.append(len(value))
        
    result = 1
    for i in count:
        result *= i + 1
    
    return result - 1