const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m, v] = input[0].split(' ').map(Number)
let graph = {}

for (let i = 1; i < input.length; i++) {
  const [from, to] = input[i].split(' ').map(Number)
  if (graph[from]) {
    graph[from].push(to)
    graph[from].sort((a, b) => a - b)
  } else graph[from] = [to]
  if (graph[to]) {
    graph[to].push(from)
    graph[to].sort((a, b) => a - b)
  } else graph[to] = [from]
}

let visited_dfs = new Array(n).fill(false)
let answer_dfs = []

dfs(v)

function dfs(node) {
  if (visited_dfs[node]) return
  visited_dfs[node] = true
  answer_dfs.push(node)
  if (graph[node]) {
    for (let i = 0; i < graph[node].length; i++) {
      const nextNode = graph[node][i]
      if (!visited_dfs[nextNode]) {
        dfs(nextNode)
      }
    }
  }
}

console.log(answer_dfs.join(' '))

let visited_bfs = new Array(n).fill(false)
let queue_bfs = []
let data_bfs = []

queue_bfs.push(v)
bfs(v)

function bfs(node) {
  if (visited_bfs[node]) return
  visited_bfs[node] = true
  data_bfs.push(node)

  if (graph[node]) {
    queue_bfs.push(...graph[node])
  }

  while (queue_bfs.length > 0) {
    const nextNode = queue_bfs.shift()
    bfs(nextNode)
  }
}

console.log(data_bfs.join(' '))
