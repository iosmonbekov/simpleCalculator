let list = [];
let nums = [];
let ops = [];

let number = "";

const button = document.getElementsByTagName("button");
const display = document.querySelector(".display");
const result = document.querySelector(".result");

for (let i = 0; i < button.length; i++) {
  if (button[i].innerText === "E") {
    button[i].onclick = reset;
  } else if (button[i].innerText === "=") {
    button[i].onclick = answer;
  } else if (isNaN(+button[i].innerText)) {
    button[i].onclick = work;
  } else {
    button[i].onclick = addToList;
  }
}

function work() {
  list.push(this.innerHTML);
  ops.push(this.innerHTML);
  nums.push(number);
  number = "";
  display.innerHTML = list.join("");
}

function addToList() {
  result.innerHTML = "";
  list.push(this.innerHTML);
  number = number + this.innerHTML;
  display.innerHTML = list.join("");
}

function reset() {
  result.innerHTML = "";
  list.length = 0;
  ops.length = 0;
  nums.length = 0;
  number = "";
  display.innerHTML = list.join("");
}

function answer() {
  nums.push(number);
  for (let i = 0; i < list.length; i++) {
    if (isNaN(+list[i]) && isNaN(+list[i + 1])) {
      reset();
      return;
    }
  }
  let temp = nums[0];
  let o = 1;
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case "+":
        temp = +temp + +nums[o];
        o++;
        break;
      case "-":
        temp = +temp - +nums[o];
        o++;
        break;
      case "*":
        temp = +temp * +nums[o];
        o++;
        break;
      default:
        temp = +temp / +nums[o];
        o++;
    }
  }
  reset();
  result.innerHTML = "Answer is: " + temp;
}
