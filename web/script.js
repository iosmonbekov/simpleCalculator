let list = [];
const button = document.getElementsByTagName("button");
const display = document.querySelector(".display");

for (let i = 0; i < button.length; i++) {
  button[i].onclick = addToList;
}

function addToList() {
  list.push(this.innerHTML);
  display.innerHTML = list.join("");
}
