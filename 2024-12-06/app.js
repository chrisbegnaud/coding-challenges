// ******** Highest and Lowest ********

/* Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers){
  arr = numbers.split(' ');
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

//  My first solution that worked.
//  arr = numbers.split(' ');
//  let high = Math.max(...arr);
//  let low = Math.min(...arr);
//  return `${high} ${low}`;