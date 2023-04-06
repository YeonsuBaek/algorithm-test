def solution(s, n):
    result = []
    upper_a = ord('A')
    upper_z = ord('Z')
    lower_a = ord('a')
    lower_z = ord('z')

    for i in list(s):
        if i == ' ':
            result.append(i)
            continue
        asci = ord(i) + n
        if lower_z < asci:
            asci = asci - lower_z + lower_a - 1
        elif asci - n <= upper_z and upper_z < asci:
            asci = asci - upper_z + upper_a - 1
        result.append(chr(asci))
    
    return "".join(result)
