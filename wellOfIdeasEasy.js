function well(x){
  let arr = x.filter(idea => idea == 'good');
  return arr.length < 1 ? 'Fail!' : arr.length < 3 ? 'Publish!' : 'I smell a series!';
} 