function getCurrentBtn() {
  if (btnSingUp.classList.value.includes("btn-active")) {
    currentBtn = btnSingUp;
    otherBtn = btnlogin;
  } else {
    currentBtn = btnlogin;
    otherBtn = btnSingUp;
  }
}
function toggleCurentBtnAnim(e) {
  if (!e.target.classList.value.includes("btn-active")) {
    currentBtn.classList.remove("btn-active");
    otherBtn.classList.add("btn-active");
  }
  getCurrentBtn();
}
function changeForm(e) {
  toggleCurentBtnAnim(e);

  if (currentBtn.classList.value.includes("btn-login")) {
    groupPasswordContainer.classList.add("hidden");
    loginPassword.classList.remove("hidden");
    nameContainer.classList.add("hidden");
    submitBtn.innerText = "Login";
  } else {
    groupPasswordContainer.classList.remove("hidden");
    loginPassword.classList.add("hidden");
    nameContainer.classList.remove("hidden");
    submitBtn.innerText = "Sign in";
  }
  getNotHiddenInputs();
}

function getNotHiddenInputs() {
  notHiddenInputs = [];
  for (const input of allInputs) {
    if (!input.classList.contains("hidden")) {
      notHiddenInputs.push(input);
    }
  }
  addListenerInput();
}
let prevPass = "";
function validateInput(input) {
  let inputVal = input[1].trim();
  let length = inputVal.length;

  switch (input[0]) {
    case "first-name":
    case "last-name": {
      let validations = {
        length: false,
        lettersOnly: false,
        isNotEmpty: false,
      };
      let regExp = /^[a-z]+( [a-z]+)*$/gi;

      if (length !== 0) {
        validations.isNotEmpty = true;
      }
      if (length >= 3 && length <= 30) {
        validations.length = true;
      }
      if (regExp.test(inputVal)) {
        validations.lettersOnly = true;
      }
      return validations;
    }
    case "email": {
      let validations = {
        isEmail: false,
        isNotEmpty: false,
      };
      let regExp = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

      if (length !== 0) {
        validations.isNotEmpty = true;
      }
      if (regExp.test(inputVal)) {
        validations.isEmail = true;
      }
      return validations;
    }

    case "password":
      let validationsPassword = {
        hasUpperCase: false,
        hasNumber: false,
        isNotEmpty: false,
        passLength: false,
      };
      if (length !== 0) {
        validationsPassword.isNotEmpty = true;
      }
      if (length >= 8 && length <= 16) {
        validationsPassword.passLength = true;
      }
      if (/[A-Z]/.test(inputVal)) {
        validationsPassword.hasUpperCase = true;
      }
      if (/\d/.test(inputVal)) {
        validationsPassword.hasNumber = true;
      }
      let passwordIsValid = Object.values(validationsPassword).every(
        (ele) => ele === true
      );

      if (passwordIsValid) {
        prevPass = inputVal;
      }
      return validationsPassword;
    case "confirm-password":
      let validationsConfPass = {
        isSameAsPrev: false,
        isNotEmpty: false,
      };
      if (length !== 0) {
        validationsConfPass.isNotEmpty = true;
        if (inputVal === prevPass) {
          validationsConfPass.isSameAsPrev = true;
        }
      }
      return validationsConfPass;
  }
}

function createValidationToolTip(input, validations) {
  const validationsMsg = {
    lettersOnly: `The field consist in only letters`,
    length: `The field has 3 characters minimum and 30 characters maximum`,
    isNotEmpty: `The field is not empty`,
    hasUpperCase: "The password contain at least 1 Uppercase letter",
    hasNumber: "The password contain at least 1 number",
    passLength:
      "The password length has to be 8 characters minimum and 16 maximum",
    isSameAsPrev: "Both passwords are equal",
    isEmail: "Is valid email: something@example.com",
  };
  let div = document.createElement("div");
  div.classList.add("validator-tooltip");
  let ul = document.createElement("ul");
  let previousToolTips = document.querySelectorAll(".validator-tooltip");
  previousToolTips.forEach((ele) => {
    ele.remove();
  });
  div.appendChild(ul);

  for (const msg in validations) {
    let iconValid = document.createElement("i");
    let iconInvalid = document.createElement("i");

    iconValid.classList.add("bx", "bx-check", "icon-valid");
    iconInvalid.classList.add("bx", "bx-x", "icon-invalid");
    let li = document.createElement("li");

    li.innerText = validationsMsg[msg];
    ul.append(li);
    li.prepend(validations[msg] ? iconValid : iconInvalid);
  }
  input?.insertAdjacentElement("afterend", div);
}
function createInputValid(input, prevElemntSibling, inputIsValid) {
  if (prevElemntSibling?.classList.contains("bx")) {
    prevElemntSibling.remove();
  }
  let iconValid = document.createElement("i");
  let iconInvalid = document.createElement("i");
  let iconClasses = ["bx", "icon"];
  iconValid.classList.add(...iconClasses, "icon-valid", "bx-check");
  iconInvalid.classList.add(...iconClasses, "icon-invalid", "bx-x");
  if (inputIsValid) {
    input.classList.remove("invalid-input");
    input.classList.add("valid-input");
    input.insertAdjacentElement("beforebegin", iconValid);
  } else {
    input.classList.remove("valid-input");
    input.classList.add("invalid-input");
    input.insertAdjacentElement("beforebegin", iconInvalid);
  }
}
function addListenerInput() {
  btns.forEach((ele) => ele.addEventListener("click", changeForm));
  let input = document.querySelectorAll("input");
  let validInputs = {};
  notHiddenInputs.forEach((ele) => {
    
    ele.addEventListener("input", (e) => {
      let inputMsg = validateInput([e.target.name, e.target.value]);
      createValidationToolTip(e.target, inputMsg);
      isInputValid = Object.values(inputMsg).every((ele) => ele === true);

      if (isInputValid) {
        validInputs[e.target.name] = true;
      } else {
        validInputs[e.target.name] = false;
      }

      let prevElemntSibling = e.target.previousElementSibling;
      let validationsAllInputs = Object.values(validInputs).every((ele) => ele);
      console.log(validationsAllInputs);
      createInputValid(e.target, prevElemntSibling, isInputValid);
    });
  });
  input.forEach((ele) => {
    ele.addEventListener("focus", () => {
      let previousToolTips = document.querySelectorAll(".validator-tooltip");
      previousToolTips.forEach((ele) => {
        ele.remove();
      });
    });
  });
}
function checkBtn(isInputValid) {
  if (isInputValid) {
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled");
  }
}

const btnSingUp = document.querySelector(".btn-signup");
const btnlogin = document.querySelector(".btn-login");
const groupPasswordContainer = document.querySelector(".group-password");
const btns = document.querySelectorAll(".page-buttons button");
const loginPassword = document.querySelector(".password-login");
const nameContainer = document.querySelector(".group-name");
const submitBtn = document.querySelector(".submit-form");
const allInputs = document.querySelectorAll(".form-group");
const btnSubmit = document.querySelector(".submit-form");
let notHiddenInputs = [];
let currentBtn = btnSingUp;
let otherBtn = btnlogin;

let isInputValid = false;

getNotHiddenInputs();
