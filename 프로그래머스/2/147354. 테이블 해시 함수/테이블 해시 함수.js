function solution(data, col, row_begin, row_end) {
    const list = data.sort((a, b) => {
        if (a[col - 1] > b[col - 1]) {
            return 1
        } else if (a[col - 1] < b[col - 1]) {
            return -1
        } else {
            if (a[0] > b[0]) {
                return -1
            }
            return 1
        }
    })
    
    let result = 0
    for (let i = row_begin; i <= row_end; i++) {
        const s = data[i - 1].reduce((acc, cur) => acc + (cur % i), 0)
        result = result ^ s
    }
    
    return result
}
