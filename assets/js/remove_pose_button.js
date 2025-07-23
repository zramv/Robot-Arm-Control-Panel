function removePose(id) {
  fetch("api/remove_pose.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  })
    .then((response) => response.json)
    .then((data) => {
      console.log(data);
      fetchData();
    })
    .catch((e) => {
      console.log(e);
    });
}
