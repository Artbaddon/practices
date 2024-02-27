//return price without vat
function excludingVatPrice(price) {
  return +(price / 1.15).toFixed(2);
}

console.log(excludingVatPrice(230));
