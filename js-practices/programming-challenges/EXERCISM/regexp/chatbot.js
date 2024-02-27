export function isValidCommand(command) {
  return /chatbot/gi.test(command.split(" ")[0]);
}
export function removeEmoji(message) {
  const regexp = new RegExp("emoji|[0-9]", "gi");
  return message.split(regexp).join("");
}

export function checkPhoneNumber(number) {
  let regexp = /\(\+[0-9]{2}\) [0-9]{3}-[0-9]{3}-[0-9]{3}/gm;
  if (regexp.test(number)) {
    return "Thanks! You can now download me to your phone.";
  }
  return `Oops, it seems like I can't reach out to ${number}`;
}
export function getURL(userInput) {
  return userInput.match(/\w+\.\w+/gm);
}
export function niceToMeetYou(fullName) {
  let [name, lastName] = fullName.split(",");

  let replacedName = fullName.replace(lastName, name);
  let replacedLastName = replacedName.replace(name, lastName).replace(",", " ");
  return `Nice to meet you, ${replacedLastName}`;
}

let fullName = "Smith, John";
console.log(niceToMeetYou(fullName));
