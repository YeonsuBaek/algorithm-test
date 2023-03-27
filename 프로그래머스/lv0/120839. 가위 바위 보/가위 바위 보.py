def solution(rsp):
    answer = []
    matching = {
        '2': '0',
        '0': '5',
        '5': '2'
    }
    
    for i in list(rsp):
        answer.append(matching[i])

    return "".join(answer)
    