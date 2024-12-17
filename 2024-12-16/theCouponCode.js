function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let d1 = new Date(currentDate);
  let d2 = new Date(expirationDate);
  return enteredCode === correctCode && d1 <= d2 ? true : false;
}