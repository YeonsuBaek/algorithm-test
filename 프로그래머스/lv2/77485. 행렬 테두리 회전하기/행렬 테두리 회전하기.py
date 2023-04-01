def rotate(x1, y1, x2, y2, board):
    first_value = board[x1][y1]
    value = first_value
    
    for i in range(x1, x2):
        board[i][y1] = board[i + 1][y1]
        value = min(value, board[i + 1][y1])
        
    for i in range(y1, y2):
        board[x2][i] = board[x2][i + 1]
        value = min(value, board[x2][i + 1])
    
    for i in range(x2, x1, -1):
        board[i][y2] = board[i - 1][y2]
        value = min(value, board[i - 1][y2])
    
    for i in range(y2, y1 + 1, -1):
        board[x1][i] = board[x1][i - 1]
        value = min(value, board[x1][i - 1])
    
    board[x1][y1 + 1] = first_value
    return value
    
def solution(rows, columns, queries):
    board = [[i * columns + (j + 1) for j in range(columns)] for i in range(rows)]

    result = []
    for x1, y1, x2, y2 in queries:
        result.append(rotate(x1 - 1, y1 - 1, x2 - 1, y2 - 1, board))
    
    return result