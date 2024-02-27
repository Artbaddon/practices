let ip = "128.32.10.1";

console.log(ip.split(".").reduce((int, v) => int * 256 + +v));
