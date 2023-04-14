import math
def solution(numbers, hand):
    left_number = [1, 4, 7]
    right_number = [3, 6, 9]
    left_hand = '*'
    right_hand = '#'
    result = []
    
    for number in numbers:
        if number in left_number:
            result.append('L')
            left_hand = number
        elif number in right_number:
            result.append('R')
            right_hand = number
        else:
            if left_hand == '*': left_x, left_y = 4, 1
            elif left_hand == 0: left_x, left_y = 4, 2
            else: left_x, left_y = math.ceil(left_hand / 3), left_hand % 3 if left_hand % 3 != 0 else left_hand % 3 + 1
            if right_hand == '#': right_x, right_y = 4, 3
            elif right_hand == 0: right_x, right_y = 4, 2
            else: right_x, right_y = math.ceil(right_hand / 3), right_hand % 3 if right_hand % 3 != 0 else right_hand % 3 + 1
            if number == 0: std_x, std_y = 4, 2
            else: std_x, std_y = math.ceil(number / 3), number % 3 if number % 3 != 0 else number % 3 + 1
            
            left_distance = abs(left_x - std_x) + abs(left_y - std_y)
            right_distance = abs(right_x - std_x) + abs(right_y - std_y)

            if left_distance < right_distance:
                result.append('L')
                left_hand = number
            elif left_distance > right_distance:
                result.append('R')
                right_hand = number
            else:
                if hand == 'left':
                    result.append('L')
                    left_hand = number
                else:
                    result.append('R')
                    right_hand = number

    return "".join(result)