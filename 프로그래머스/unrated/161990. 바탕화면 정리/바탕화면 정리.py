def solution(wallpaper):
    start = [52, 52]
    end = [0, 0]
    
    for xi, line in enumerate(wallpaper):
        if '#' in line:
            for yi, file in enumerate(line):
                if file == '#':
                    if start[0] > xi: start[0] = xi
                    if start[1] > yi: start[1] = yi
                    if end[0] < xi + 1: end[0] = xi + 1
                    if end[1] < yi + 1: end[1] = yi + 1
    
    return start + end