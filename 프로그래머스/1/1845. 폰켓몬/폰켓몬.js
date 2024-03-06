function solution(nums) {
    const max = nums.length / 2
    const mons = [...new Set(nums)]
    return mons.length > max ? max : mons.length
}
