function solution(citations) {
  for (let h = Math.max(...citations); h >= 0; h--) {
    const valid = citations.filter((citation) => {
      return citation >= h;
    });
    if (valid.length >= h) {
      return h;
    }
  }
}