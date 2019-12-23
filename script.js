const characterCountSpan = document.getElementById("slider-character-count");
const characterCountSlider = document.getElementById("slider-character");
const passwordFieldEl = document.querySelector(".app-password-field");
const generatePasswordButton = document.getElementById("generate-button");

let checkboxUppercase = document.getElementById("checkbox-uppercase");
let checkboxNumbers = document.getElementById("checkbox-numbers");
let checkboxSymbols = document.getElementById("checkbox-symbols");

// CHAR CODE VARIABLES
const SYMBOL_CHAR_CODES = generateArrayFrom(33, 47)
  .concat(generateArrayFrom(58, 64))
  .concat(generateArrayFrom(91, 96))
  .concat(generateArrayFrom(123, 126));
const NUMBER_CHAR_CODES = generateArrayFrom(48, 57);
const UPPERCASE_CHAR_CODES = generateArrayFrom(65, 90);

const LOWERCASE_CHAR_CODES = generateArrayFrom(97, 122);

characterCountSlider.addEventListener("change", e => {
  if (e.target.value === "1") {
    characterCountSpan.textContent = `${e.target.value} character`;
  } else {
    characterCountSpan.textContent = `${e.target.value} characters`;
  }
});

generatePasswordButton.addEventListener("click", () => {
  let hasUppercase = checkboxUppercase.checked;
  let hasNumbers = checkboxNumbers.checked;
  let hasSymbols = checkboxSymbols.checked;
  let charCount = characterCountSlider.value;

  let password = generateNewPassword(
    charCount,
    hasUppercase,
    hasNumbers,
    hasSymbols
  );

  passwordFieldEl.textContent = password;
});

function generateArrayFrom(lowVal, highVal) {
  const arr = [];

  for (let i = lowVal; i <= highVal; i++) {
    arr.push(i);
  }

  return arr;
}

function generateNewPassword(charCount, hasUppercase, hasNumbers, hasSymbols) {
  // default to lowercase

  let charCodes = LOWERCASE_CHAR_CODES;

  //   get an array of all the possible characters for the generated password
  if (hasUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (hasNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (hasSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

  const passwordCharacters = [];

  for (let i = 0; i < charCount; i++) {
    //   get a random character from the codes array
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    const character = String.fromCharCode(characterCode);

    passwordCharacters.push(character);
  }

  return passwordCharacters.join("");
}

window.addEventListener("load", () => {
  characterCountSpan.textContent = `${characterCountSlider.value} characters`;
});
