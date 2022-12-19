let headContainer = document.querySelector(".headContainer");
let rightColor = document.getElementById("rgb");
let colorRest = document.getElementById("btn1");
let easyMode = document.getElementById("btn2");
let hardMode = document.getElementById("btn3");
let blockBox = document.querySelector(".divContent");
let colors = [];
let count = { value: 6 };
let hidden = document.getElementById("text");
createColors(count.value);
spreadIt(count.value);


// function to generate random colors

function createColors(n) {
  for (i = 0; i < n; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    colors.push(`rgb(${r}, ${g}, ${b})`);
  }
}

rightColor.innerHTML =
  colors[Math.floor(Math.random() * count.value)].toLocaleUpperCase();

// functions to create the blocks and making it eligble to choose the correct answer.

function spreadIt(n) {
  for (i = 0; i < n; i++) {
    let blocks = document.createElement("div");
    blocks.className = "blockStyle";
    blockBox.appendChild(blocks);
    blocks.style.backgroundColor = colors[i];

    let myPick = blocks.style.backgroundColor.toLocaleUpperCase();

    blocks.addEventListener("click", () => {
      if (myPick == rightColor.innerHTML) {
        colorIt(myPick);
        hidden.innerHTML = "Corret!";
        colorRest.innerHTML = "PLAY AGAIN";
      } else {
        blocks.style.backgroundColor = "black";
        hidden.innerHTML = "Try Again"
      }
    });
  }
}

// function to give all the blocks one backgroundcolor when you choose the corrrect answer. 

function colorIt(paint) {
  let allColor = document.querySelectorAll(".blockStyle");
  allColor.forEach((element) => {
    element.style.backgroundColor = paint;
  });
}

// function to clear all the blocks

function clearIt() {
  let restColors = document.querySelectorAll(".blockStyle");
  restColors.forEach((element) => {
    element.remove();
  });
}

colorRest.addEventListener("click", () => {
  clearIt();
  colors = [];
  createColors(count.value);
  spreadIt(count.value);
  rightColor.innerHTML =
    colors[Math.floor(Math.random() * count.value)].toLocaleUpperCase();
  colorRest.innerHTML = "NEW COLOR";
  hidden.innerHTML = "";
});

easyMode.addEventListener("click", () => {
  // alert("hello")
  count.value = 3;
  clearIt();
  colors = [];
  createColors(3);
  spreadIt(3);
  rightColor.innerHTML =
    colors[Math.floor(Math.random() * 3)].toLocaleUpperCase();
  hidden.innerHTML = "";
});

hardMode.addEventListener("click", () => {
  count.value = 6;
  clearIt();
  colors = [];
  createColors(6);
  spreadIt(6);
  rightColor.innerHTML =
    colors[Math.floor(Math.random() * 3)].toLocaleUpperCase();
  hidden.innerHTML = "";
});
