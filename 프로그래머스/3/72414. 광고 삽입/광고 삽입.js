function solution(play_time, adv_time, logs) {
    const play_second = transformSecond(play_time)
    const time_table = new Array(play_second).fill(0)
    
    for (let i = 0; i < logs.length; i++) {
        const [start_second, end_second] = logs[i].split('-').map(log => transformSecond(log))
        time_table[start_second] += 1
        time_table[end_second] -= 1
    }

    for (let i = 1; i <= play_second; i++) {
        time_table[i] += time_table[i - 1] 
    }
    for (let i = 1; i <= play_second; i++) {
        time_table[i] += time_table[i - 1] 
    }
    
    const adv_second = transformSecond(adv_time)
    let sum = time_table[adv_second - 1]
    let result_second = 0
    
    for (let i = adv_second - 1; i < play_second; i++) {
        if (sum < time_table[i] - time_table[i - adv_second]) {
            sum = time_table[i] - time_table[i - adv_second]
            result_second = i - adv_second + 1
        }
    }

    return transformTime(result_second)

    function transformSecond(time) {
        const [h, m, s] = time.split(':')
        return Number(h) * 3600 + Number(m) * 60 + Number(s) * 1
    }
        
    function transformTime(time) {
        let HH = time / 3600 >> 0
        let MM = (time / 60 >> 0) % 60
        let SS = time % 60
        HH = HH > 9 ? HH : '0' + HH
        MM = MM > 9 ? MM : '0' + MM
        SS = SS > 9 ? SS : '0' + SS
        return `${HH}:${MM}:${SS}`
    }
}