const header = document.querySelector(".header");

let count = 0;
function changeColor() {
  const colors = ["yellow", "greenyellow", "orange", "aqua", "green"];

  header.style.color = colors[count];
  count = (count + 1) % colors.length;
}

setInterval(changeColor, 1000);
