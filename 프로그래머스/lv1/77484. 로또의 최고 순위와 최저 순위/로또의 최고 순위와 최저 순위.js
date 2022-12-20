function solution(lottos, win_nums) {
  const validations = lottos.filter((number) => {
    if (number !== 0) return number;
  });
  let same = 0;
  let result = new Array(2).fill(6);

  for (let i = 0; i < validations.length; i++) {
    if (win_nums.includes(validations[i])) {
      same += 1;
      if (same >= 2) {
        result[0] -= 1;
        result[1] -= 1;
      }
    }
  }
  const unknownNumber = lottos.length - validations.length;

  if (unknownNumber === 6) result[0] -= unknownNumber - 1;
  else if (unknownNumber >= 1 || (unknownNumber === 1 && same === 1)) result[0] -= unknownNumber;

  return result;
}