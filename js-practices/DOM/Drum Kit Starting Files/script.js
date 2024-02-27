const numberOfDrumButtons = document.querySelectorAll(".drum").length;
const audioArr = [
  "crash",
  "kick-bass",
  "snare",
  "tom-1",
  "tom-2",
  "tom-3",
  "tom-4",
];

const keysArr = ["w", "a", "s", "d", "j", "k", "l"];
const drumButtons = document.querySelectorAll(".drum");
for (let i = 0; i < numberOfDrumButtons; i++) {
  let audio = new Audio(`sounds/${audioArr[i]}.mp3`);

  drumButtons[i].addEventListener("click", function () {
    audio.play();
  });
}
document.addEventListener("keydown", makeSound);

function makeSound(event) {
  for (let i = 0; i < keysArr.length; i++) {
    let audio = new Audio(`sounds/${audioArr[i]}.mp3`);
    if (event.key.toLowerCase() === keysArr[i]) {
      audio.play();
      btnAnimation(keysArr[i]);
    }
  }
}

function btnAnimation(currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"), 200);
}
// //CONSTRUCTOR FUNCS
// class Person {
//   constructor(name, age, city, language) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.language = language;
//     this.speak = function () {
//       alert("hello");
//     };
//   }
// }
// // let person1 = new Person("Jesus", 33, "Jerusalen", ["Latin", "Ancient Hebrew"]);
// // person1.speak();
export function postOrder(variety, quantity) {
  order({ variety: variety, quantity: quantity }, onSuccess, onError);
}
