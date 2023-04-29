def solution(park, routes):
    posX, posY = [0, 0]
    for xi, x in enumerate(park):
        for yi, y in enumerate(x):
            if y == 'S':
                posX, posY = xi, yi
                break
    
    width, height = len(park), len(park[0])
    for route in routes:
        direction, num = route.split(' ')
        exX, exY = posX, posY
        count = 0
        for n in range(1, int(num) + 1):
            if direction == 'E': exY += 1
            if direction == 'W': exY -= 1
            if direction == 'N': exX -= 1
            if direction == 'S': exX += 1
            if exX < 0 or exX >= width or exY < 0 or exY >= height: break
            if park[exX][exY] == 'X': break
            count += 1
        if count == int(num): posX, posY = exX, exY
    return posX, posY