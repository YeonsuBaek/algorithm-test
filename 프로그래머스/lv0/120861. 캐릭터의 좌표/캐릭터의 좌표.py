def solution(keyinput, board):
    x, y = [0, 0]
    maxX = board[0] // 2
    maxY = board[1] // 2
    
    for key in keyinput:
        if key == 'left':
            x -= 1
        elif key == 'right':
            x += 1
        elif key == 'up':
            y += 1
        else:
            y -= 1
    	
        if x > maxX:
            x = maxX
        elif x < 0 - maxX:
            x = 0 - maxX

        if y > maxY:
            y = maxY
        elif y < 0 - maxY:
            y = 0 - maxY
    
        
    return x, y
