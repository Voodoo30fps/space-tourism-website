const navBar = document.querySelector("nav");
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () => {
  const visibility = navBar.getAttribute("aria-expanded");

  if(visibility === "false") {
    navBar.setAttribute("aria-expanded", true);
  } else {
    navBar.setAttribute("aria-expanded", false);
  }
});