// function dashatize(num) {
//   let digits = Array.from(String(num));
//   let dashatizedNum = "";
//   if (digits[0] === "-") {
//     digits.shift();
//   }

//   for (let i = 0; i < digits.length; i++) {
//     let outLength = dashatizedNum.length;
//     if (i === 0) {
//       if (digits.length !== 1 && digits[i] % 2) {
//         dashatizedNum += digits[i] + "-";
//       } else {
//         dashatizedNum += digits[i];
//       }
//     } else if (i === digits.length - 1) {
//       if (digits[i] % 2) {
//         console.log(dashatizedNum[outLength - 1]);
//         if (dashatizedNum[outLength - 1] !== "-") {
//           dashatizedNum += `-${digits[i]}`;
//         } else {
//           dashatizedNum += `${digits[i]}`;
//         }
//       } else {
//         dashatizedNum += digits[i];
//       }
//     } else {
//       if (digits[i] % 2) {
//         if (dashatizedNum[outLength - 1] !== "-") {
//           dashatizedNum += `-${digits[i]}-`;
//         } else {
//           dashatizedNum += `${digits[i]}-`;
//         }
//       } else {
//         dashatizedNum += digits[i];
//       }
//     }
//   }

//   return dashatizedNum;
// }
function dashatize(num){
    
}
const num = -1;
console.log(dashatize(num));
