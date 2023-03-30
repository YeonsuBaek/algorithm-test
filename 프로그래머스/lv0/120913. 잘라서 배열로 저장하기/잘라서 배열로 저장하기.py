def solution(my_str, n):
    answer = []
    string = ""
    for word in list(my_str):
        string += word
        if len(string) == n:
            answer.append(string)
            string = ""
    if len(string) > 0:
        answer.append(string)
    return answer