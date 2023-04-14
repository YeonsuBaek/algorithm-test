def get_distance(pos, std):
    return abs(pos[0] - std[0]) + abs(pos[1] - std[1])

def solution(numbers, hand):
    left_number = [1, 4, 7]
    right_number = [3, 6, 9]
    directions = {'L': [0, 3], 'R': [2, 3]}
    result = []
    
    def press_key(direction, pos):
        result.append(direction)
        directions[direction] = pos
    
    for number in numbers:
        direction = 'L'
        number_pos = [0, (number - 1) // 3]
        if number in left_number: pass
        elif number in right_number: direction = 'R'
        else:
            number_pos = [1, 3 if number == 0 else (number - 1) // 3]
            left_distance = get_distance(directions['L'], number_pos)
            right_distance = get_distance(directions['R'], number_pos)

            if left_distance > right_distance: direction = 'R'
            elif left_distance == right_distance and hand == 'right': direction = 'R'
                    
        press_key(direction, number_pos)

    return "".join(result)