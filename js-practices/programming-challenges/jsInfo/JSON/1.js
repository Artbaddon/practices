// let user = {
//   name: "John Smith",
//   age: 35,
// };
// let userJSON = JSON.stringify(user);
// console.log(userJSON);
// console.log(JSON.parse(userJSON));
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};
room.occupiedBy = meetup;
meetup.self = meetup;
console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);
