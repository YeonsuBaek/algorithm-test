def solution(answers):
    list1 = [1, 2, 3, 4, 5]
    list2 = [2, 1, 2, 3, 2, 4, 2, 5]
    list3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    count = [0, 0, 0]
    
    for index, answer in enumerate(answers):
        if list1[index % len(list1)] == answer: count[0] += 1
        if list2[index % len(list2)] == answer: count[1] += 1
        if list3[index % len(list3)] == answer: count[2] += 1

    result = []
    max_result = max(count)
    for i, c in enumerate(count):
        if max_result == c:
            result.append(i + 1)
            
    return result