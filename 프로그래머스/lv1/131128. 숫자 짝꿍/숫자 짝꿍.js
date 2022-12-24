function solution(X, Y) {
  let answer = '';
  let numberX = new Array(10).fill(0);
  let numberY = new Array(10).fill(0);

  X.split('').forEach((x) => {
    numberX[x] += 1;
  });

  Y.split('').forEach((y) => {
    numberY[y] += 1;
  });

  for (let i = 9; i >= 0; i--) {
    if (numberX[i] > 0 && numberY[i] > 0)
      answer += i
        .toString()
        .repeat(numberX[i] < numberY[i] ? numberX[i] : numberY[i]);
  }

  if (answer === '') answer = '-1';
  if (parseInt(answer, 10) === 0) answer = '0';

  return answer;
}