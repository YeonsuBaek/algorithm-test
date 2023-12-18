function solution(users, emoticons) {
    const discounts = [40, 30, 20, 10]
    const discountable = []
    const numberOfEmo = emoticons.length
    const discountList = []
    let result = [0, 0]
    
    function saleEmoticons(depth) {
        if (depth === numberOfEmo) {
            discountable.push([...discountList])
			return
        }
        
        discounts.forEach((discount) => {
           	discountList[depth] = discount
            saleEmoticons(depth + 1)
        })
    }

	saleEmoticons(0)
    
    discountable.forEach((disc, index) => {
        let plusMembers = 0
        let income = 0
        
        users.forEach(([percent, price], userIndex) => {
            let payment = 0
            let isPlusMember = false

            for (let e = 0; e < emoticons.length; e++) {
                if (disc[e] >= percent) {
                    payment += emoticons[e] * (100 - disc[e]) / 100
                }

                if (payment >= price) {
                    isPlusMember = true
                    break
                }
            }

            if (isPlusMember) {
                plusMembers += 1
            } else {
                income += payment
            }
        })
        
        if (plusMembers > result[0]) {
            result = [plusMembers, income]
        } else if (result[0] === plusMembers && income > result[1]) {
            result[1] = income
        }
    })
    
    return result
}
