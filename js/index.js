const inputBox = document.getElementById("input-box");
const listContent = document.getElementById("listContent");

const checkbox = document.getElementById("checkmark");
const crossbox = document.getElementById("crossmark");

function addTask() {
  if (inputBox.value === "") {
    alert("Please write something in the task box");
  } else {
    let new_li = document.createElement("li");
    let checkMarkSpan = document.createElement("span");
    checkMarkSpan.id = "checkmark";
    checkMarkSpan.setAttribute("title", "checkmark the task");

    let taskTextSpan = document.createElement("span");
    taskTextSpan.className = "text";
    taskTextSpan.innerHTML = inputBox.value;

    let crossMarkSpan = document.createElement("span");
    crossMarkSpan.id = "crossmark";
    crossMarkSpan.innerHTML = "\u00d7";
    crossMarkSpan.setAttribute("title", "remove the task");

    new_li.appendChild(taskTextSpan);

    new_li.appendChild(crossMarkSpan);

    new_li.insertBefore(checkMarkSpan, new_li.firstChild);

    listContent.appendChild(new_li);
  }

  inputBox.value = "";
  saveData();
}

listContent.addEventListener(
  "click",
  (e) => {
    if (e.target.id === "checkmark") {
      e.target.parentElement.classList.toggle("checked");
      saveData();
    } else if (e.target.id === "crossmark") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("listItems", listContent.innerHTML);
}

function getData() {
  listContent.innerHTML = localStorage.getItem("listItems");
}

getData();
