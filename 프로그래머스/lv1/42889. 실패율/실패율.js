// function solution(N, stages) {
//     let failList = [];
    
//     for (let i = 1; i <= N; i++) {
//         failList.push({ number: i, fail: 0 })
//     }
    
//     let stageNumber;
//     let total;
//     stages.sort((a, b) => a - b);
//     stages.forEach((stage, index) => {
//         if (stage <= N) {
//             if (stageNumber !== stage) {
//                 stageNumber = stage;
//                 total = stages.length - index;
//                 failList[stage - 1].fail = 1 / total;
//             } else { 
//                 failList[stage - 1].fail += 1 / total;
//             }
//         }
        
//     })
    
//     failList.sort((a, b) => b.fail - a.fail);
//     const result = failList.map((item) => {
//         return item.number;
//     })
//     return result;
// }

function solution(N, stages) {
    const failedCount = new Array(N + 1).fill(0);
    stages.forEach(stage => failedCount[stage - 1] += 1);
    let players = stages.length;
    const failTuples = [];
    for(let i = 0; i < N + 1; i++) {
        const stage = i + 1;
        if(stage === N + 1) continue
        const count = failedCount[i];
        failTuples.push([stage, count / players])
        players -= count;
    }
    return failTuples.sort((tupleA, tupleB) => tupleB[1] - tupleA[1]).map((tuple) => tuple[0])
}
