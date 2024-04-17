function solution(maps) {
    let minCount = 0
    
    function bfs(x, y) {
        const queue = []
        queue.push([x, y, 1])
        
        while (queue?.length > 0) {
            const [x, y, distance] = queue.shift()
            
            if (x === maps.length - 1 && y === maps[0].length - 1) {
                return distance
            }
            
            if (maps[x][y] === 0) {
                continue
            }
            
            maps[x][y] = 0
            
            if (x + 1 < maps.length) {
                queue.push([x + 1, y, distance + 1])
            }
            if (y + 1 < maps[0].length) {
                queue.push([x, y + 1, distance + 1])
            }
            if (x - 1 >= 0) {
                queue.push([x - 1, y, distance + 1])
            }
            if (y - 1 >= 0) {
                queue.push([x, y - 1, distance + 1])
            }
        }
        
        return -1
    }
    
    return bfs(0, 0)

}