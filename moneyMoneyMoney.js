function calculateYears(principal, interest, tax, desired) {
  let y = 0;
    while (principal < desired) {
      principal += (principal * interest) - (principal * interest) * tax;
      y++;
    }
  return y;
}