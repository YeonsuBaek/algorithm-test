function solution(n, wires) {
    let answer = Infinity
    
    let tree = Array.from(Array(n + 1), () => [])
    wires.forEach(([a, b]) => {
        tree[a].push(b)
        tree[b].push(a)
    })
    
    wires.forEach(([a, b]) => {
        const diffTree = Math.abs(searchTree(a, b) - searchTree(b, a))
        answer = Math.min(answer, diffTree)
    })
    
    function searchTree(root, cutting) {
        let count = 0
        let visited = []
        let queue = [root]
        visited[root] = true
        
        while (queue.length > 0) {
            const node = queue.shift()
            
            tree[node].forEach((elem) => {
                if (elem !== cutting && !visited[elem]) {
                    visited[elem] = true
                    queue.push(elem)
                }
            })
            
            count++
        }
        
        return count
    }
    return answer
}