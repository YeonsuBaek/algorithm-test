const fs = require('fs');
const [nk, ...nations] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = nk.split(' ').map(Number)
const map = []

nations.forEach((nation) => {
    const [num, gold, silver, bronze] = nation.split(' ').map(Number)
    const score = gold * 100 + silver * 10 + bronze
    map.push({
        num, gold, silver, bronze, score
    })
})

const sortNations = map.sort((a, b) => {
    if (a.gold > b.gold) {
        return -1
    } else if (a.gold < b.gold) {
        return 1
    } else {
        if (a.silver > b.silver) {
            return -1
        } else if (a.silver < b.silver) {
            return 1
        } else {
            if (a.bronze >= b.bronze) {
                return -1
            } else {
                return 1
            }
        }
    }
})

let rank = 1
let prevScore = sortNations[0].score
sortNations[0].ranking = rank

for (let i = 1; i < N; i++) {
    if (sortNations[i].score < prevScore) {
        rank++
    }
    sortNations[i].ranking = rank
    prevScore = sortNations[i].score
}

console.log(sortNations.find(obj => obj.num === K).ranking)