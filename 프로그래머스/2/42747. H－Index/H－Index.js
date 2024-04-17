function solution(citations) {
    let num = citations.length
    
    while (num >= 0) {
        const filter = citations.filter(citation => citation >= num)
        if (filter.length >= num) {
            break
        }
        num--
    }
    
    return num
}
