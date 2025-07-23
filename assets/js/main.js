motors = document.querySelectorAll("input[type=range]");
output = document.querySelectorAll("output");

showValue();
function showValue() {
  for (let i = 0; i < motors.length; i++) {
    output[i].textContent = motors[i].value;
    motors[i].addEventListener("input", (event) => {
      output[i].textContent = event.target.value;
    });
  }
}

addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const reset_button = document.querySelector("#reset");
reset_button.addEventListener("click", () => {
  motors.forEach((element) => {
    element.value = 90;
  });
  showValue();
});
