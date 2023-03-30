def solution(my_string):
    answer = []
    
    for word in list(my_string):
        if word.isupper():
            answer.append(word.lower())
        else:
            answer.append(word.upper())
            
    return "".join(answer)