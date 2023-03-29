def solution(numer1, denom1, numer2, denom2):
    top = denom1 * numer2 + denom2 * numer1
    bottom = denom1 * denom2
    
    gcd = 0
    
    for i in range(min(top, bottom), 0, -1):
        if top % i == 0 and bottom % i == 0:
            gcd = i
            break
    
    return top / i, bottom / i
