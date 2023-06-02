import heapq

def changeHeap(heap):
    new_heap = []
    for value in heap:
        heapq.heappush(new_heap, -value)
    return new_heap

def solution(operations):
    answer = []
    min_heap = []
    max_heap = []
    
    for operation in operations:
        command, num = operation.split(' ')
        num = int(num)
        
        if command == 'I':
            heapq.heappush(min_heap, num)
            heapq.heappush(max_heap, -num)
        elif command == 'D':
            if num == 1:
                if len(max_heap) > 0:
                    heapq.heappop(max_heap)
                    min_heap = changeHeap(max_heap)
            if num == -1:
                if len(min_heap) > 0:
                    heapq.heappop(min_heap)
                    max_heap = changeHeap(min_heap)
                
    if len(max_heap) > 0 and len(min_heap) > 0:
        answer.append(-max_heap[0])
        answer.append(min_heap[0])
    else:
        answer.append(0)
        answer.append(0)
    return answer