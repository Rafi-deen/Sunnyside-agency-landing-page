const menu = document.querySelector(".menu-btn")
const menuItems = document.querySelector(".menu-items")

// menuItems.style.display = "block"

menu.addEventListener("click", () => {
  if (menuItems.style.display === "block") {
    menuItems.style.display = "none"
  } else {
    menuItems.style.display = "block"
  }
})
