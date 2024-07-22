function solution(bandage, health, attacks) {
    let [duration, healRate, bonusHealing] = bandage
    let healthCurrent = health
    
    let successCount = 0
    for (let i = 0; i < attacks.length; i++) {
        const [attackTime, attackRate] = attacks[i]
        const count = attackTime - 1 - successCount
        const sum = healthCurrent + count * healRate + Math.floor(count / duration) * bonusHealing

        healthCurrent = sum > health ? health : sum
        successCount = attackTime
        healthCurrent -= attackRate
        
        console.log(attacks[i], count, healthCurrent)
        if (healthCurrent <= 0) {
            return -1
        }
    }
    return healthCurrent
}