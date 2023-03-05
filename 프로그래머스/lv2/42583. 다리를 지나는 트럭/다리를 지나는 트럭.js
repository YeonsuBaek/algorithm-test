function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0);
    let bridgeWeight = 0;
    let time = 0;
    
    truck_weights.forEach((truck) => {
        bridgeWeight = bridge.reduce((acc, cur) => acc + cur, 0);
		
        if (bridgeWeight + truck > weight) {
             while (true) {
                for (let i = 1; i < bridge_length; i++) {
                    bridge[i - 1] = bridge[i];
                    if (i === bridge_length - 1) bridge[i] = 0;
                }

                bridgeWeight = bridge.reduce((acc, cur) => acc + cur, 0);
                time += 1;

                if (bridgeWeight + truck <= weight) {
                    time -= 1;
                    break;
                }
            }	
        } else {
            for (let i = 1; i < bridge_length; i++) {
                bridge[i - 1] = bridge[i];
                if (i === bridge_length - 1) bridge[i] = 0;
            }
        }

        bridge[bridge_length - 1] = truck;
        time += 1;
    })

    for (let i = bridge_length - 1; i >= 0; i--) {
        if (i !== 0) {
            time += (i + 1);
            break;
        }
    }
    
    return time;
}

