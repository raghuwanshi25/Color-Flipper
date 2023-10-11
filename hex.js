const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorName = document.getElementById("color");
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[randomNum()];
  }
  document.body.style.background = hexCode;
  colorName.textContent = hexCode;
});
function randomNum() {
  return Math.floor(Math.random() * hex.length);
}
