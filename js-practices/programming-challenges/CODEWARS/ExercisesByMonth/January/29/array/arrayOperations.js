let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

let middle = Math.floor((styles.length - 1) / 2);

styles[middle] = "Classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);
