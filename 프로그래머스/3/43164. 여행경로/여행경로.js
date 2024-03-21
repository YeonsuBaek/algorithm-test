function solution(tickets) {
    let routes = {}
    
    tickets.forEach(([start, end]) => {
        if (routes[start]) {
            routes[start].push(end)
            routes[start].sort()
        } else {
            routes[start] = [end]
        }
    })
    
    let visitedRoute = []
    
    function dfs(node) {
        const neighbors = routes[node]

        while (neighbors && neighbors.length > 0) {
            const nextNode = neighbors.shift()
            dfs(nextNode);
        }

        visitedRoute.push(node)
    }
    
    dfs('ICN')
    
    return visitedRoute.reverse()
}