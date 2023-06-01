from heapq import heapify, heappop, heappush
def solution(n, works):
    total = sum(works)
    if sum(works) <= n:
        return 0

    works = [(-1) * work for work in works]
    heapify(works)
    
    while n > 0:
        curr = heappop(works)
        post = curr + 1
        heappush(works, post)
        n -= 1

    return sum([work * work for work in works])