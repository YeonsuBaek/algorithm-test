def solution(new_id):
    new_id = new_id.lower()
    
    words = []
    for word in list(new_id):
        if word.isdigit() or word.isalpha() or word == '-' or word == '_' or word == '.':
            words.append(word)
    
    answer = ''.join(words)
    while '..' in answer:
        answer = answer.replace('..', '.')
    
    answer = answer.strip('.')
    
    if len(answer) == 0: answer = 'a'
    if len(answer) >= 16:
        answer = answer[:15]
        answer = answer.strip('.')
    if len(answer) <= 2:
        last_word = answer[-1] * (3 - len(answer))
        answer += last_word
    
    return answer