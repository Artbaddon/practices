// console.log(Person.address?.street);

// console.log(Person.age ?? 1);
// export const createVisitor = (name, age, ticketId) => {
//   return {
//     name: name,
//     age: age,
//     ticketId: ticketId,
//   };
// };

// export const ticketStatus = (tickets, ticketId) => {
//   if (tickets[ticketId] === undefined) {
//     return "unkown ticket id";
//   }
//   if (tickets[ticketId] === null) {
//     return "not sold";
//   }

//   return `sold to ${tickets[ticketId]}`;
// };
// const tickets = {
//   "0H2AZ123": null,
//   "23LA9T41": "Verena Nardi",
// };
// const ticketId = "23LA9T41";

// console.log(ticketStatus(tickets, ticketId));

// export const simpleTicketStatus = (tickets, ticketId) => {
//   return tickets[ticketId] ?? "invalid ticket !!!";
// };
// console.log(simpleTicketStatus(tickets, ticketId));

// const visitorNew = {
//   name: "Verena Nardi",
//   age: 45,
//   ticketId: "H32AZ123",
//   gtc: {
//     signed: true,
//     version: "2.1",
//   },
// };

// console.log(visitorNew.gtc?.version);

const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
  "43LS9T41": null,
  "55ME5B11": null,
  "23LS9T42": "Jesus Chrish",
  "53BE3T41": "Kaladin Stormblessed",
};
const ticketId = "55ME5B11";

const ticketStatus = (tickets, ticketId) => {
  return tickets[ticketId] === undefined
    ? "invalid ticket id"
    : tickets[ticketId] === null
    ? "not sold"
    : `sold to ${tickets[ticketId]}`;
};
console.log(ticketStatus(tickets, ticketId));
