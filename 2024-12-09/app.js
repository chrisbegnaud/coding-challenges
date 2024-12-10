// ******** Complementary DNA ********

/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function dnaStrand(dna){
  const map = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
};
  return dna.replace(/[ATCG]/g, match => map[match]);
}

// function dnaStrand(dna){
//   return dna.split('').map(c => {
//     if (c === "A") {
//       return "T";
//     } else if (c === "T") {
//       return "A";
//     } else if (c === "C") {
//       return "G";
//     } else if (c === "G") {
//       return "C";
//     } else return c;
//   }).join('')
// }