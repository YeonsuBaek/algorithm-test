function solution(citations) {
    const n = citations.length
    for (let h = Math.max(...citations); h >= 0; h--) {
        const list = citations.filter(citation => citation >= h)
        if (list.length >= h) return h
    }
}
