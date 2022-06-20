export function shuffleArray(arr1, arr2) {
  let resultArr = arr1.concat(arr2);
  let arrLength = resultArr.length;
  let shuffledArr;
  let randomizeIndex;
  while (arrLength) {
    randomizeIndex = Math.floor(Math.random() * arrLength--);
    shuffledArr = resultArr[arrLength];
    resultArr[arrLength] = resultArr[randomizeIndex];
    resultArr[randomizeIndex] = shuffledArr;
  }
  return resultArr;
}
