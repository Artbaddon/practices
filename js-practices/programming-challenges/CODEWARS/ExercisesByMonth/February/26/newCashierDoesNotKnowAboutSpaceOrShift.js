function getOrder(input) {
  const MENU = {
    Burger: 1,
    Fries: 2,
    Chicken: 3,
    Pizza: 4,
    Sandwich: 5,
    Onionrings: 6,
    Milkshake: 7,
    Coke: 8,
  };
  const REGEXP = new RegExp(Object.keys(MENU).join("|"), "gi");
  return input
    .match(REGEXP)
    .map((ele) => ele[0].toUpperCase() + ele.slice(1))
    .sort((x, y) => MENU[x] - MENU[y]);
}

let input = "pizzachickenfriesburgercokemilkshakefriessandwich";

console.log(getOrder(input));
