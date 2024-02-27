function findFirstRepeated(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    for (let j = i + 1; j < gifts.length; j++) {
      if (gifts[i] === gifts[j]) {
        return gifts[i];
      }
    }
  }
}

console.log(findFirstRepeated([2, 1, 2, 5, 3, 3, 2]));

export const a=()=>{}