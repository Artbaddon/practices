// // Creating an object with Key and value
// const user = {
//   name: "Peter",
//   lastName: "Griffith",
//   occupation: "yes",
//   greet: () => {
//     return "HEllO";
//   },
// };
// const users = [];
// //Accesing a key
// console.log(user["name"]);
// console.log(user.name);

// //Adding or Changing the value of a existent key
// user.name = "Peterr";
// console.log(user.name);

// user.age = 52;
// console.log(user.age);
// //Delete an Entry
// delete user.age;
// //Using a method of an object
// console.log(user.greet());
// user.sayBye = () => "Bye";
// console.log(user.sayBye());
// delete user.sayBye;
// delete user.greet;

// for (const key in user) {
//   console.log(key + ": " + user[key]);
// }

// class User {
//   constructor(User) {
//     this.name = User;
//     this.age = User;
//   }
// }
// const user1 = new User(((name = "Pepe"), (age = 24)));

// console.log(user1);

// export const createScoreBoard = () => ({ "The Best Ever": 1000000 });
// export const applyMondayBonus = (scoreBoard) => {
//   for (const key in scoreBoard) {
//     scoreBoard[key] += 100;
//   }
//   return scoreBoard;
// };
// const scoreBoard = {
//   "Dave Thomas": 400,
//   "Freyja Ćirić": 539,
//   "José Valim": 265,
// };
// for (const key in scoreBoard) {
//   scoreBoard[key] = scoreBoard[key] * 2 + 10;
// }
// console.log(scoreBoard);
// // console.log(applyMondayBonus(scoreBoard));
// export const normalizeScore = (params) => {
//   return params.normalizeFunction(params.score);
// };
// const params = {
//   score: 45,
//   normalizeFunction: function (score) {
//     return score * 3 - 10;
//   },
// };

// console.log(normalizeScore(params));

// export const isLeap = (year) => {
//   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// };
// console.log(isLeap(1996));
