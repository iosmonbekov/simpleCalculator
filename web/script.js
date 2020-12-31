let list = [];

const button = document.getElementsByTagName("button");
const display = document.querySelector(".display");
const result = document.querySelector(".result");
console.log(result);

for (let i = 0; i < button.length; i++) {
  if (button[i].innerText === "E") {
    button[i].onclick = reset;
  } else {
    button[i].onclick = addToList;
  }
}

button[11].onclick = answer;

function addToList() {
  list.push(this.innerHTML);
  display.innerHTML = list.join("");
}

function reset() {
  list.length = 0;
  display.innerHTML = list.join("");
}
function answer() {
  for (let i = 0; i < list.length; i++) {
    if (
      (list[i] === "+" ||
        list[i] === "-" ||
        list[i] === "*" ||
        list[i] === "/") &&
      (list[i + 1] === "+" ||
        list[i + 1] === "-" ||
        list[i + 1] === "*" ||
        list[i + 1] === "/")
    ) {
      reset();
      return;
    }
  }
  list.push("+");
  let num1, num2, temp;
  let begin = 0;
  let k = 0;
  for (let i = 0; i < list.length; i++) {
    if (
      list[i] === "+" ||
      list[i] === "-" ||
      list[i] === "*" ||
      list[i] === "/"
    ) {
      if (k === 0) {
        num1 = +list.slice(begin, i).join("");
        begin = i + 1;
        k++;
      } else {
        num2 = +list.slice(begin, i).join("");
        k = 0;
      }
    }
  }
  temp = num1 + num2;
  reset();
  result.innerHTML = "Answer is: " + temp;
}
