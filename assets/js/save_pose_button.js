let save_pose_button = document.querySelector("#save_pose");

save_pose_button.addEventListener("click", () => {
  fetch("api/save_pose.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(motorsValue()),
  })
    .then((response) => {
      fetchData();
    })
    .catch((e) => {
      console.log(e);
    });
});

function motorsValue() {
  let motors_value = [];
  motors.forEach((motor) => {
    motors_value.push(parseInt(motor.value));
  });
  return motors_value;
}
