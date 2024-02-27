// // // const check = (a, x) => a.find((e) => e === x) === x;

// // const stray = (numbers) => {
// //   let num = 0;
// //   let strayNum = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     num = numbers[i];
// //     console.log(num);
// //     if (i >= 1) {
// //       if (num !== numbers[i]) {
// //         strayNum = numbers[i];
// //         console.log(strayNum);
// //       } else {
// //       }
// //     }
// //   }
// // };
// // stray([2, 1, 1]);

// // const solution = (str, ending) => str.endsWith(ending);

// // console.log(solution("abcde", "d"));

// // const testEven = (n) => n % 2 === 0;

// const accum = (s) => {
//   let string = [];
//   for (let i = 0; i < s.length; i++) {
//     string.push(s[i].repeat(i + 1));
//   }

//   return string
//     .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
//     .join("-");
// };

// console.log(accum("ZpglnRxqenU"));
/*function lifeInWeeks(age) {
    
/************Don't change the code above************/

//Write your code here.

/*   let yearsLeft= 90-age;
    let monthsLeft=Math.floor(yearsLeft*12);
    let weeksLeft=Math.floor(yearsLeft*52);
    let daysLeft=Math.floor(yearsLeft*365);
    let hoursLeft=Math.floor(daysLeft*24)
    
    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, ${monthsLeft} months ,and ${hoursLeft} hours left.`);


    
    
    
/*************Don't change the code below**********/
/*}

lifeInWeeks(19);*/
// const bmiCalculator = (weight, height) => Math.floor(weight / height ** 2);

const bmiCalculator = (weight, height) =>
  Math.floor(weight / Math.pow(height, 2));

console.log(bmiCalculator(65, 1.8));
