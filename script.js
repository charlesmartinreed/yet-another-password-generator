const characterCountSpan = document.getElementById("slider-character-count");
const characterCountSlider = document.getElementById("slider-character");

characterCountSlider.addEventListener("change", e => {
  characterCountSpan.textContent = e.target.value;
  characterCountSpan.classList.add("count-update");
});

window.addEventListener("load", () => {
  characterCountSpan.textContent = `${characterCountSlider.value}`;
});
