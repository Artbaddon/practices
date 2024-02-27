import {
  platform,
  release,
  arch,
  cpus,
  freemem,
  totalmem,
  uptime,
} from "node:os";

console.log("Operative System ", platform());
console.log("OS version ", release());
console.log("Architecture ", arch());
console.log("Number of CPUS", cpus()); // <- escala procesos en node
console.log("Free Memory", freemem() / 1024 / 1024);
console.log("Total Memory", totalmem() / 1024 / 1024);
console.log("Uptime", uptime() / 60 / 60);
