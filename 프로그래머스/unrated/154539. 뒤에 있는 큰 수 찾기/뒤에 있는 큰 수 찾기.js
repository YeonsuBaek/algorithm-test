// 시간초과
//function solution(numbers) {
//	return numbers.map((number, index) => {
//        const backNumbers = numbers.slice(index);
//        if (Math.max(...backNumbers) <= number) return -1;
//        for (let i = index; i < numbers.length; i++) {
//            if (number < numbers[i]) {
//                return numbers[i];
//            }
//        }
//    })
//}

function solution(numbers) {
    const biggerNumbers = Array(numbers.length).fill(-1);
    const stack = [];
    
    numbers.forEach((number, index) => {
        while (stack && numbers[stack.at(-1)] < number) {
            biggerNumbers[stack.pop()] = number;
        }
        stack.push(index);
    })
    
    return biggerNumbers;
}