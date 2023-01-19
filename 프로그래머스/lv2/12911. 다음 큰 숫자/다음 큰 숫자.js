function solution(n) {
    const binaryNumber = [...n.toString(2)].filter((num) => {
        return num === '1';
    }).length;
  
    let answer = n + 1;
    while (true) {
        const answerBinary = [...answer.toString(2)].filter((num) => {
            return num === '1';
        }).length;
        if (answerBinary === binaryNumber) {
            return answer;
        }
        answer += 1;
    }
}
