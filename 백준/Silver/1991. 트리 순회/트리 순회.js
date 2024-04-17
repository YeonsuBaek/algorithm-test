const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const n = input.shift()
  let tree = {}

  for (let i = 0; i < Number(n); i++) {
    const [a, b, c] = input[i].split(' ')
    tree[a] = [b, c]
  }

let result = ''

function preorder(node) {
  if (node === ".") return
  const [left, right] = tree[node]
  result += node
  preorder(left)
  preorder(right)
}

function inorder(node) {
  if (node === ".") return
  const [left, right] = tree[node]
  inorder(left)
    result += node
  inorder(right)
}

function postorder(node) {
  if (node === ".") return
  const [left, right] = tree[node]
  postorder(left)
  postorder(right)
    result += node
}

preorder('A')
result += '\n'
inorder('A')
result += '\n'
postorder('A')
console.log(result)