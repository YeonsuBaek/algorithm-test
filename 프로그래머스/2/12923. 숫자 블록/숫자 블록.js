function solution(begin, end) {
    let arr = new Array(end - begin + 1).fill(1);
    
    if (begin === 1) arr[0] = 0
    
    for (let i = begin; i <= end; i++) {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                if (i / j <= 10000000) {
                    arr[i - begin] = Math.max(arr[i - begin], i / j)
                    break
                }
                if (j <= 10000000) {
                    arr[i - begin] = Math.max(arr[i - begin], j)
                }
            }
        }
    }
    
    return arr
}
