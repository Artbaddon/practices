let discountedPrice = 75.75;
let salePercentage = 25;

function discoverOriginalPrice(discountedPrice, salePercentage) {
  return (discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}

console.log(discoverOriginalPrice(discountedPrice, salePercentage));
