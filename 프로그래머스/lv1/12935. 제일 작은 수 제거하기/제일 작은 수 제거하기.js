function solution(arr) {
  const arrLength = arr.length;
  if (arrLength === 1) {
    arr.splice(0, 1, -1);
    return arr;
  }

  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arrLength; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  arr.splice(smallestIndex, 1);
  return arr;
}
