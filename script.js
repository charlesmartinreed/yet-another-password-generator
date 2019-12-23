const characterCountSpan = document.getElementById("slider-character-count");
const characterCountSlider = document.getElementById("slider-character");
const passwordFieldEl = document.querySelector(".app-password-field");
const generatePasswordButton = document.getElementById("generate-button");

characterCountSlider.addEventListener("change", e => {
  if (e.target.value === "1") {
    characterCountSpan.textContent = `${e.target.value} character`;
  } else {
    characterCountSpan.textContent = `${e.target.value} characters`;
  }
});

generatePasswordButton.addEventListener("click", () => {
  const password = generateNewPassword();
  passwordFieldEl.textContent = password;
});

const generateNewPassword = () => {
  return "ABC123456!@#!_&MOIKS";
};

window.addEventListener("load", () => {
  characterCountSpan.textContent = `${characterCountSlider.value} characters`;
});
