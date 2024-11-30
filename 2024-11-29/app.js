function isIsogram(str){
  let newArr = str.toLowerCase().split('').sort();
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] === newArr[i + 1]) {
      return false;
    }
  }
  return true;
}