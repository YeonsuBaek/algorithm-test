let heap = []

function add(value) {
  heap.push(value)
  bubbleUp()
}

function bubbleUp() {
  let index = heap.length - 1
  let parentIdx = Math.floor((index - 1) / 2)
  
  while (heap[parentIdx] && heap[index] < heap[parentIdx]) {
    [heap[index], heap[parentIdx]] = [heap[parentIdx], heap[index]]
    index = parentIdx
    parentIdx = Math.floor((index - 1) / 2)
  }
}

function poll() {
  if (heap.length === 1) {
    return heap.pop()
  }

  const value = heap[0]
  heap[0] = heap.pop()
  bubbleDown()
  return value
}

function bubbleDown() {
  let index = 0
  let leftIdx = index * 2 + 1
  let rightIdx = index * 2 + 2

  while (leftIdx < heap.length) {
    let smallerIdx = leftIdx
    if (rightIdx < heap.length && heap[rightIdx] < heap[leftIdx]) {
      smallerIdx = rightIdx
    }
    
    if (heap[index] < heap[smallerIdx]) {
      break
    }

    [heap[index], heap[smallerIdx]] = [heap[smallerIdx], heap[index]]
    index = smallerIdx
    leftIdx = index * 2 + 1
    rightIdx = index * 2 + 2
  }
}

function solution(scoville, K) {
    let step = 0
    heap = scoville.sort((a, b) => a - b)
    
    while (scoville[0] < K) {
        const first = poll()
        const second = poll()
        const newScov = first + second * 2
        add(newScov)
        step++

        if (heap.length === 1 && newScov < K) {
            step = -1
            break
        }
    }

    return step
}