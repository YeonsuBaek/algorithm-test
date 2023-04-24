def solution(nums):
    choice_number = len(nums) // 2
    pocket_list = list(set(nums))
    return choice_number if choice_number < len(pocket_list) else len(pocket_list)