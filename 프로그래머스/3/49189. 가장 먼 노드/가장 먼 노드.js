function solution(n, vertex) {
    const graph = {}
    
    vertex.forEach(([start, end]) => {
        if (graph[start]) graph[start].push(end)
        else graph[start] = [end]
        if (graph[end]) graph[end].push(start);
        else graph[end] = [start];
    })

    const visited = new Array(n + 1).fill(0)
    const queue = [1]
    visited[1] += 1
    
    while (queue.length > 0) {
        const node = queue.shift()
        
        for (const nextNode of graph[node]) {
            if (!visited[nextNode]) {
                visited[nextNode] = visited[node] + 1
                queue.push(nextNode)
            }
        }
    }
    
    const max = Math.max(...visited)
    return visited.filter(v => v === max).length
}