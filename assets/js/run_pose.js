run_button = document.querySelector("#run");

run_button.addEventListener("click", () => {
  fetch("api/get_run_pose.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(motorsValue()),
  })
    .then((response) => {
      //response for inform the user about change in run pose
    })
    .catch((e) => {
      console.log(e);
    });
});
