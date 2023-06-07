import heapq

def solution(N, road, K):
    graph = [[] for i in range(N + 1)]
    distances = [500000] * (N + 1)
    
    for start, end, time in road:
        graph[start].append([end, time])
        graph[end].append([start, time])
    
    def dijkstra(start):
        queue = []
        distances[start] = 0
        heapq.heappush(queue, [0, start])
        
        while queue:
            distance, now = heapq.heappop(queue)
            
            if distances[now] < distance: continue
            
            for i in graph[now]:
                time = distance + i[1]
                
                if time < distances[i[0]]:
                    distances[i[0]] = time
                    heapq.heappush(queue, (time, i[0]))
    
    dijkstra(1)
    
    return len([d for d in distances if d <= K])