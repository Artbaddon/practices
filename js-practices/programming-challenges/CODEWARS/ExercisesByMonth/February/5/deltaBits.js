function convertBits(a, b) {
  let aValInBits = a.toString(2);
  let bValInBits = b.toString(2);
  console.log(aValInBits);
  console.log(bValInBits);
  if (a < b) {
    return bValInBits.length - aValInBits.length;
  }
  return aValInBits.length - bValInBits.length + 1;
}

let a = 43;
let b = 2009989843;

console.log(convertBits(a, b));
