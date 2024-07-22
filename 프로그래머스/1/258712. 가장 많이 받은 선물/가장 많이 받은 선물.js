// 선물 지수 = 이번 달까지 자신이 친구들에게 준 선물의 수 - 받은 선물의 수
// 만약 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않습니다.

// return 선물을 가장 많이 받을 친구가 받을 선물의 수

function solution(friends, gifts) {
    let table = friends.map(friend => {
        return {
            name: friend,
            send: [],
            get: [],
            score: 0,
            prediction: 0,
        }
    })
    
    gifts.forEach((gift) => {
        const [from, to] = gift.split(' ')
        const fromIndex = getIndex(from)
        const toIndex = getIndex(to)
        table[fromIndex].send.push(to)
        table[toIndex].get.push(from)
    })
    
    table = table.map((t, i) => {
        return { ...t, score: t.send.length - t.get.length }
        
    })
    
    for (let i = 0; i < friends.length; i++) {
        const friendTable = table[getIndex(friends[i])]
        for (let j = i + 1; j < friends.length; j++) {
            const otherTable = table[getIndex(friends[j])]
            const sendNum = friendTable.send.filter(item => item === friends[j]).length
            const getNum = friendTable.get.filter(item => item === friends[j]).length
            if (sendNum > getNum) {
                friendTable.prediction += 1
            } else if (sendNum < getNum) {
                otherTable.prediction += 1
            } else {
                if (friendTable.score > otherTable.score) friendTable.prediction += 1
                else if (friendTable.score < otherTable.score) otherTable.prediction += 1
            }
        }
    }
    
    const predictions = table.map(item => item.prediction)
    const maxPrediction = Math.max(...predictions)

    return maxPrediction
    
    function getIndex(name) {
        return table.findIndex(item => item.name === name)
    }
}

