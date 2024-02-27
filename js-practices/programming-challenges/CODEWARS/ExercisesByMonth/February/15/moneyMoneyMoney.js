"use strict";
function calculateYears(principal, interest, tax, desired) {
  let totalYears = 0;
  while (principal < desired) {
    let interestPrincipal = principal * interest;
    let taxInterest = interestPrincipal - interestPrincipal * tax;
    principal = principal + taxInterest;
    totalYears++;
  }

  return totalYears;
}
let principal = 1000;
let interest = 0.05;
let tax = 0.18;
let desired = 1100;
