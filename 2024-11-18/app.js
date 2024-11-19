function SeriesSum(n) {
  
    if (n === 0 || n === 1) {
      return String(n.toFixed(2));
    } 
    
    if (n > 1) {
      let sum = 1.25;
      let denom = 4
      for (let i = 2; i < n; i++) {
        sum = sum +  1 / (denom += 3);
      }
        return String(sum.toFixed(2));
    } 
  }