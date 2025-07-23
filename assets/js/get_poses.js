table = document.querySelector("tbody");
console.log(table);
function fetchData() {
  fetch("api/get_poses.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {},
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      table.textContent = "";
      renderTable(data);
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
}

function renderTable(data) {
  counterID = 1;
  const fragment = document.createDocumentFragment();
  data.forEach((element) => {
    const tr = document.createElement("tr");

    const id = document.createElement("td");
    id.textContent = counterID++;
    id.id = element.id;
    tr.appendChild(id);

    const motor1 = document.createElement("td");
    motor1.textContent = element.motor1;
    tr.appendChild(motor1);

    const motor2 = document.createElement("td");
    motor2.textContent = element.motor2;
    tr.appendChild(motor2);

    const motor3 = document.createElement("td");
    motor3.textContent = element.motor3;
    tr.appendChild(motor3);

    const motor4 = document.createElement("td");
    motor4.textContent = element.motor4;
    tr.appendChild(motor4);

    const motor5 = document.createElement("td");
    motor5.textContent = element.motor5;
    tr.appendChild(motor5);

    const motor6 = document.createElement("td");
    motor6.textContent = element.motor6;
    tr.appendChild(motor6);

    const action = document.createElement("td");
    const load_button = document.createElement("button");
    const remove_button = document.createElement("button");

    load_button.textContent = "Load";
    load_button.setAttribute("type", "button");
    remove_button.textContent = "Remove";
    remove_button.value = element.id;
    remove_button.classList.add("remove");
    remove_button.setAttribute("type", "button");

    load_button.addEventListener("click", (e) => {
      loadPose(element);
    });

    remove_button.addEventListener("click", (e) => {
      removePose(e.target.value);
    });

    action.appendChild(load_button);
    action.appendChild(remove_button);

    tr.appendChild(action);
    fragment.appendChild(tr);
  });

  table.appendChild(fragment);
}
