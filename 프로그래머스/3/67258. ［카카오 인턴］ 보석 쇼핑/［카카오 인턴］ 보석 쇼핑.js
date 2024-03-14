function solution(gems) {
    const gem_types = new Set(gems)
    const gem_num = gem_types.size
    const gem_map = new Map()
    let min_len = Infinity
    let [start, end] = [0, 0]
    let [min_start, min_end] = [0, 0]
    
    while (end < gems.length) {
        const gem = gems[end]
        gem_map.set(gem, (gem_map.get(gem) || 0) + 1)
        end++
        
        if (gem_map.size === gem_num) {
            while (gem_map.size === gem_num) {
                const gem_removing = gems[start]
                const gem_removing_count = gem_map.get(gem_removing) - 1
                
                if (gem_removing_count === 0) {
                    gem_map.delete(gem_removing)
                } else {
                    gem_map.set(gem_removing, gem_removing_count)
                }
                
                start++
            }
            
            const len = end - start + 1
            if (len < min_len) {
                min_len = len
                min_start = start
                min_end = end
            }
        }
    }
    
    return [min_start, min_end]
}
