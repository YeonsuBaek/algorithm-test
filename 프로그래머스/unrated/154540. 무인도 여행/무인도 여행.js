function solution(maps) {
    const result = []
    maps = maps.map((list) => list.split(''))
    
    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= maps.length || y >= maps[x].length || maps[x][y] === 'X') return 0
        
        const current = parseInt(maps[x][y])
        maps[x][y] = 'X'
        
        return current + dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x, y + 1)
    }
    
    for (let x = 0; x < maps.length; x++) {
        for (let y = 0; y < maps[x].length; y++) {
           if (maps[x][y] !== 'X') {
               result.push(dfs(x, y))
           }
        }
    }
    
    return result.length ? result.sort((a, b) => a - b) : [-1]
}