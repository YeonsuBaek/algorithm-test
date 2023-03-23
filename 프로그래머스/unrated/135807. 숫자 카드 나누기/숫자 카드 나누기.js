function solution(arrayA, arrayB) {
    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => a - b);
    
	return Math.max(getNumber(arrayA, arrayB), getNumber(arrayB, arrayA));
}

function getNumber(standard, target) {
    for (let i = standard[0]; i > 0; i--) {
        if (standard.every((number) => number % i === 0) && !target.some((number) => number % i === 0)) return i;
    }
    return 0;
}
