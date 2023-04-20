def solution(s, skip, index):
    answer = []
    alphabets = []
    
    for a in range(26):
        alphabet = chr(a + 97)
        if alphabet not in list(skip):
            alphabets.append(alphabet)

    for a in list(s):
        alphabet_index = alphabets.index(a) + index
        if alphabet_index >= len(alphabets):
            alphabet_index = alphabet_index % len(alphabets)
        answer.append(alphabets[alphabet_index])
    
    return "".join(answer)