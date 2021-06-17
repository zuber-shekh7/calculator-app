const input = document.querySelector("#input");

const btnDel = document.querySelector("#btnDel");
const btnAc = document.querySelector("#btnAc");
const btnEql = document.querySelector("#btnEql");
const buttons = document.querySelectorAll(".button-container .btn");

btnDel.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

btnAc.addEventListener("click", () => {
  input.value = "0";
});

btnEql.addEventListener("click", () => {
  input.value = eval(input.value);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    input.value = input.value + button.textContent;
  });
});
