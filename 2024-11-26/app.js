function doubleChar(str) {
  let newStr = '';
  for (const char of str) {
    newStr += char.repeat(2); 
  }
  return newStr;
}