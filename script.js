const characterCountSpan = document.getElementById("slider-character-count");
const characterCountSlider = document.getElementById("slider-character");

characterCountSlider.addEventListener("change", e => {
  if (e.target.value === "1") {
    characterCountSpan.textContent = `${e.target.value} character`;
  } else {
    characterCountSpan.textContent = `${e.target.value} characters`;
  }
});

window.addEventListener("load", () => {
  characterCountSpan.textContent = `${characterCountSlider.value} characters`;
});
