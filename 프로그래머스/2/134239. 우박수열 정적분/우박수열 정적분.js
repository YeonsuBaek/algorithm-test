function solution(k, ranges) {
    // 우박수열 구하기
    let num = k
    let count = 0
    let countList = []
    while (num > 1) {
        count++
        if (num % 2 === 0) num = num / 2
        else num = num * 3 + 1
        countList.push(num)
    }
    // 각 우박수열의 넓이
    countList = countList.map((item, i) => {
        const prevCount = i === 0 ? k : countList[i - 1]
        return (prevCount + item) / 2
    })
    // 영역별 넓이
    let result = ranges.map(([a, b]) => {
        let x = a
        let y = count + b
        const arr = countList.slice(x, y)
        if (x > y) return -1
        return arr.reduce((acc, cur) => acc += cur, 0)
    })

    return result
}