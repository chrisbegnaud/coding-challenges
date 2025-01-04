function twoSort(s) {
  let alpha = s.sort((a,b) => a > b ? 1 : -1);
  return alpha[0].split('').join('***');
}

// return s.sort()[0].split('').join('***');