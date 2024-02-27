export function cookingStatus(time) {
  return time === null || time === undefined
    ? "You forgot to set the timer."
    : time !== 0
    ? "Not done, please wait."
    : "Lasagna is done.";
}
// console.log(cookingStatus(12));

export function preparationTime(layers, time) {
  const preparationTime = layers.length;
  const totalTime = time ?? 2;
  return preparationTime * totalTime;
}
const layers = [
  "sauce",
  "noodles",
  "béchamel",
  "meat",
  "mozzarella",
  "noodles",
  "ricotta",
  "eggplant",
  "béchamel",
  "noodles",
  "sauce",
  "mozzarella",
];

export function quantities(manyLayers) {
  let noodles = 0;
  let sauce = 0;
  for (let i = 0; i < manyLayers.length; i++) {
    if (manyLayers[i] === "noodles") noodles += 50;
    if (manyLayers[i] === "sauce") sauce += 0.2;
  }
  return { noodles, sauce };
}
// console.log(quantities(layers));
const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];
console.log(friendsList.at(-1));
export function addSecretIngredient(friendsList, myList) {
  let lastItem = friendsList.at(-1);
  myList.push(lastItem);
}
// addSecretIngredient(friendsList, myList);

const recipe = {
  sauce: 1,
  noodles: 250,
  meat: 150,
  tomatoes: 3,
  onion: 2,
};

export function scaleRecipe(recipe, portions) {
  const otherRecipe = {};
  if (portions > 0) {
    for (const key in recipe) {
      otherRecipe[key] = recipe[key];
      otherRecipe[key] *= portions / 2;
    }
  }
  return otherRecipe;
}

console.log(scaleRecipe(recipe, 4));
export const twoFer = (name) => {
  return name ? `One for ${name}. one for me.` : "One for you, one for me.";
};
