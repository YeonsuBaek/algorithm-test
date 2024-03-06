function solution(nums) {
    const SELECTION_NUM = nums.length / 2
    const mons = []
    nums.forEach((num) => {
        if (!mons.includes(num)) {
            mons.push(num)
        }
    })
    const monsLength = mons.length
    return monsLength <= SELECTION_NUM ? monsLength : SELECTION_NUM
}