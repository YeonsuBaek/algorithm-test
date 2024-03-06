function solution(genres, plays) {
    const playing = {}
    genres.forEach((genre, i) => {
        if (!playing.hasOwnProperty(genre)) {
            playing[genre] = {};
        }
        
        if (!playing[genre].hasOwnProperty('sum')) {
            playing[genre]['sum'] = 0
        }
        playing[genre]['sum'] += plays[i]
        
        if (!playing[genre].hasOwnProperty('list')) {
            playing[genre]['list'] = {}
        } 
        playing[genre]['list'][i] = plays[i]
    })

    const sortedGenres = Object.keys(playing).sort((a, b) => playing[b].sum - playing[a].sum)

    const result = []
    sortedGenres.forEach((genre) => {
        const sortedListKeys = Object.keys(playing[genre].list).sort((a, b) => playing[genre].list[b] - playing[genre].list[a]).slice(0, 2)
    
        result.push(...sortedListKeys)
    })
    
    return result.map((str) => parseInt(str))
}
