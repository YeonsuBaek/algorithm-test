function solution(routes) {
    let count = 1
    let camera = 30000
    
    routes.sort((a, b) => a[0] - b[0])
    routes.forEach((route) => {
        [start, end] = route
        if (start > camera) {
            count += 1
            camera = end
        } else {
            camera = Math.min(camera, end)
        }
    })
    
    return count
}

