from collections import deque

def solution(maps):
    def bfs(x, y):
        q = deque()
        q.append([x, y, 1])

        while q:
            x, y, distance = q.popleft()

            if x == len(maps) - 1 and y == len(maps[0]) - 1:
                return distance

            if maps[x][y] == 0: continue
            maps[x][y] = 0

            if x + 1 < len(maps):
                q.append((x + 1, y, distance + 1))
            if y + 1 < len(maps[0]):
                q.append((x, y + 1, distance + 1))
            if x - 1 >= 0:
                q.append((x - 1, y, distance + 1))
            if y - 1 >= 0:
                q.append((x, y - 1, distance + 1))

        return -1
    return bfs(0, 0)
    
    