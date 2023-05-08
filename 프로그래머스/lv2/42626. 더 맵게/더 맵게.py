import heapq

def solution(scoville, K):
    count = 0
    heapq.heapify(scoville)
    
    while len(scoville) >= 2:
        first = heapq.heappop(scoville) 
        
        if first >= K:
            return count 
        else:
            second = heapq.heappop(scoville) 
            heapq.heappush(scoville, first + second * 2)
            count += 1
            
    if scoville[0] > K: return count
    return -1