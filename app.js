const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let colorName = document.getElementById("color");
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  let randomIndex = randomGen();
  document.body.style.background = colors[randomIndex];
  colorName.textContent = colors[randomIndex];
});
function randomGen() {
  return Math.floor(Math.random() * 4);
}
