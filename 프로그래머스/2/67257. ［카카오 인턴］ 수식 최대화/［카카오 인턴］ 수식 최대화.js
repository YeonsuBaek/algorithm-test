function solution(expression) {
    const priorities = [
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['+', '*', '-'],
        ['+', '-', '*'],
        ['-', '*', '+'],
        ['-', '+', '*'],
    ]
    
    let maxNum = 0

    priorities.forEach(priority => {
        let arr = expression.split(/([+\-*/])/).filter(Boolean)
        priority.forEach(operator => {
            arr = compute(arr, operator)
        })
        const num = Math.abs(arr[0])
        if (maxNum < num) maxNum = num
    })
    
    return maxNum
    
    function compute(arr, operator) {
        let i = 0
        while (i < arr.length) {
            if (arr[i] === operator) {
                const left = Number(arr[i - 1])
                const right = Number(arr[i + 1])
                let result
                
                switch (operator) {
                    case '+':
                        result = left + right;
                        break;
                    case '-':
                        result = left - right;
                        break;
                    case '*':
                        result = left * right;
                        break;
                }
                
                arr = arr.slice(0, i - 1).concat(result).concat(arr.slice(i + 2));
                i = 0;
            } else {
                i++
            }
        }
        return arr
    }
}