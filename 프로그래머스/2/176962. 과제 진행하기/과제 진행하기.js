function solution(plans) {
    // 시간 순으로 나열
    const list = plans.sort((a, b) => {
        const aTime = a[1].split(':').join('')
        const bTime = b[1].split(':').join('')
        return Number(aTime) - Number(bTime)
    }).map(([work, start, time]) => {
        const [h, m] = start.split(':').map(Number)
        const startTime = h*60 + m
        return [work, startTime, Number(time)]
    })
    
    
    let stack = []
    let result = []
    
    for (let i = 0; i < list.length - 1; i++) {
        const [work, start, time] = list[i]
        const [nextWork, nextStart, nextTime] = list[i + 1]
        if (start + time <= nextStart) {
            result.push(work)
            
            let remainingTime = nextStart - (start + time)
            while (stack.length) {
                const [currWork, currTime] = stack.pop()
                if (currTime <= remainingTime) {
                    result.push(currWork)
                    remainingTime -= currTime
                } else {
                    stack.push([currWork, currTime - remainingTime])
                    break
                }
            }
        } else {
            stack.push([work, time - (nextStart - start)])
        }
    }
    
    result.push(list[list.length - 1][0])
    
    while (stack.length) {
        result.push(stack.pop()[0])
    }

    return result
}