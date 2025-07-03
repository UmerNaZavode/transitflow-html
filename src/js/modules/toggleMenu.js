export default function toggleMenu() {
  const burger = document.querySelector(".burger")
  const menu = document.querySelector(".header-main")
  burger.addEventListener("click", function() {
    menu.classList.toggle("active")
  })

}
