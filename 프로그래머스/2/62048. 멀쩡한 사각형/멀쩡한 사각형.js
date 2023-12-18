function solution(w, h) {
    const gcd = getGCD(w, h)
    const unusableSquares = (w / gcd + h / gcd - 1) * gcd
    return w * h - unusableSquares
}

const getGCD = (a, b) => {
    while (b !== 0) {
        const temp = b
        b = a % b
        a = temp
    }
    return a
}