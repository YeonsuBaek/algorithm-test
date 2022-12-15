function solution(arr) {
  let newArray = [];

  arr.forEach((item) => {
    if (item !== newArray[newArray.length - 1]) {
      newArray.push(item);
    }
  });

  return newArray;
}
