function strCount(str, letter){  
  return str.split('').filter(l => l === letter).join('').length;
}