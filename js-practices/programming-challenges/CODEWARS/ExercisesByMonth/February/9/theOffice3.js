let x = "10000000101101111110011001000";

function broken(x) {
  return x.replace(/1/g, ".").replace(/0/g, "1").replace(/\./g, 0);
}

1^2