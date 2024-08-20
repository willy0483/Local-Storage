const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");
const arrTasks = [];

btnInsert.addEventListener("click", () => {
  // const key = inpKey.value;
  const value = inpKey.value;

  if (value) {
    arrTasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }
});

for (i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  const card = document.createElement("div");
  card.classList.add("cardstyle");
  lsOutput.appendChild(card);

  const cardHeader = document.createElement("header");
  card.appendChild(cardHeader);

  const cardH3 = document.createElement("h3");
  cardH3.innerHTML = ` key = ${key} <br/> value = ${value}`;
  cardHeader.appendChild(cardH3);

  let removeButton = document.createElement("button");
  let removeIcon = document.createElement("img");
  removeIcon.src = "assets/images/Svg/icons8-delete.svg";
  removeButton.appendChild(removeIcon);

  card.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    localStorage.removeItem(key, value);
    location.reload();
  });
}
