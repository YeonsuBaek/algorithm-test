def solution(chicken):
    answer = 0
    
    while chicken >= 10:
        service = chicken // 10
        remaining = chicken % 10
        answer += service
        chicken = service + remaining
    return answer