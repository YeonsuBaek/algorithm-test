def solution(line):
    # 교점 찾기
    length = len(line)
    intersection = []
    for i in range(length):
        x1, y1, n1 = line[i]
        for j in range(i, length):
            x2, y2, n2 = line[j]
            bottom = x1 * y2 - y1 * x2
            if bottom != 0:
                x = (y1 * n2 - y2 * n1) / bottom
                y = (n1 * x2 - x1 * n2) / bottom
                
                # 교점 중 자연수 아닌 것 고르기
                if int(x) == x and int(y) == y:
                    intersection.append([int(x), int(y)])

    # 좌표만들기
    minWidth, maxWidth = [int(1e15), -int(1e15)]
    minHeight, maxHeight = [int(1e15), -int(1e15)]
    for i in intersection:
        x, y = i
        if x < minWidth: minWidth = x
        if x > maxWidth: maxWidth = x
        if y < minHeight: minHeight = y
        if y > maxHeight: maxHeight = y
            
    width = maxWidth - minWidth + 1
    height = maxHeight - minHeight + 1
    
    board = []
    for h in range(height):
        inner = "." * width
        board.append(list(inner))

    if len(board) == 0:
        board = [["."]]
    
    # 좌표 찍기
    for x, y in intersection:
        nx = x + abs(minWidth) if minWidth < 0 else x - minWidth
        ny = y + abs(minHeight) if minHeight < 0 else y - minHeight
        board[ny][nx] = '*'
    
    # 뒤집기
    newBoard = []
    for i in board:
        newBoard.append("".join(i))
    return newBoard[::-1]