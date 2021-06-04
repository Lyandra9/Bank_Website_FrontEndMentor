const menu = document.querySelector(".menu-items");
const checkbox = document.querySelector("#menu-checkbox");
const bg = document.querySelector("#bg");

function openMobileMenu() {
  if (checkbox.checked) {
    menu.classList.add("show");
  } else {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  }
}

function changeBackground() {
  if (screen.width > 400) {
    bg.src = "/media/bg-intro-desktop.svg";
    console.log("asdsdsfdsfgd");
  }

  if (screen.width <= 400) {
    bg.src = "/media/bg-intro-mobile.svg";
    console.log("asdsdsfdsafdsfdfsdsfgd");
  }
}

changeBackground();
