const arr = [
  1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 5, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1,
  2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2,
  1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1,
  1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2,
  1,
];

const findUniq = (arr) => {
  const numCount = {};
  const arrNumCount = [];
  for (let i = 0; i < arr.length; i++) {
    numCount[arr[i]] ? numCount[arr[i]]++ : (numCount[arr[i]] = 1);
  }
  for (const key in numCount) {
    if (numCount[key] === 1) {
      return +key;
    }
  }
};
console.log(findUniq(arr));
