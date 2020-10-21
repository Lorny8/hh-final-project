document.getElementById("menu-hamburger").addEventListener("click", openMenu);

function openMenu() {

  console.log("hi");
  document.querySelector(".menu").classList.add("menu-open");
}


document.getElementById("menu-close").addEventListener("click", closeMenu);

function closeMenu() {
  document.querySelector(".menu").classList.remove("menu-open");
}





document.querySelector(".modal-close").addEventListener("click", closePopUp);

function closePopUp() {

  console.log("hello")
  document.querySelector(".bg-modal").classList.add("hide-modal");
}




