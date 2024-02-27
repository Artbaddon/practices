// // const minMax = (arr) => {
// //   return [Math.min(...arr), Max.min(...arr)];
// // };

// // Using for loop for (A-Z):

// // const alphabetPosition = (text) => {
// //   let lettersArr = [];
// //   let index = 0;
// //   let ouputArr = [];

// //   const arrText = text
// //     .toLowerCase()
// //     .replace(/[^A-z\s\d][\\\^]?/gi, "")
// //     .replaceAll(" ", "")
// //     //Trim the text to eliminate the special chars and space
// //     .split("");
// //   //Split the text into an array

// //   for (let i = 97; i <= 122; i++) {
// //     lettersArr.push(String.fromCharCode(i));
// //   }

// //   //Push the letters form a to z to the arr

// //   arrText.map((element) => {
// //     if (lettersArr.find((a) => a === element)) {
// //       index = lettersArr.findIndex((a) => a === element);
// //       ouputArr.push(index + 1);
// //     }
// //   });
// //   return ouputArr.join(" ");
// // };
// // console.log(
// //   alphabetPosition("The sunset sets at twelve o' clock.") ===
// //     "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// // );
// // const findShort = (s) => Math.min(...s.split(" ").map((e) => e.length));
// // console.log(findShort("HOLA AMIGUES"));
// // const getCount = (str) => {
// //   const found = str.match(/[aeiou]/gim);
// //   return found ? found.length : 0;
// // };

// // console.log(getCount('my pyxa'))
// // function getGrade(s1, s2, s3) {
// //   let average = (s1 + s2 + s3) / 3;

// //   return average >= 90 && average <= 100
// //     ? "A"
// //     : average >= 80 && average < 90
// //     ? "B"
// //     : average >= 70 && average < 80
// //     ? "C"
// //     : average >= 60 && average < 70
// //     ? "D"
// //     : "F";
// // }
// // console.log(getGrade(60, 60, 60));

// // const abbrevName = (name) => {
// //   return name
// //     .toUpperCase()
// //     .split(" ")
// //     .map((i) => i.slice(0, 1))
// //     .join(".");
// // };

// // console.log(abbrevName("garcia m"));

// // const strCount = (str, letter) => {
// //   //code here
// //   let counter = 0;
// //   const arr = str.toLowerCase().replace(" ", "").split("");
// //   arr.map((item) => {
// //     if (item === letter.toLowerCase()) {
// //       counter++;
// //     }
// //   });
// //   return arr ? counter : 0;
// // };

// // const stringToNumber = (str) => Number(str);
// const str = ["Beg", "Life", "I", "To"];

// console.log(str.sort((a, b) => a.length - b.length));
// const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);
// const between = (a, b) => {
//   const outputArr = [];

//   for (let i = a; i <= b; i++) {
//     outputArr.push(i);
//   }
//   return outputArr;
// };

// console.log(between(1, 4));

// const countSheep = (num) => {
//   let output = "";
//   for (let i = 1; i <= num; i++) {
//     output += `i`;
//   }
//   return output;
// };
// console.log(countSheep(2));
