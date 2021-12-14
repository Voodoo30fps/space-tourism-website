const navBar = document.querySelector("nav");
const navToggler = document.querySelector(".nav-toggler");

console.log(navBar);
console.log(navToggler);

navToggler.addEventListener("click", () => {
  const visibility = navBar.getAttribute("aria-expanded");

  console.log(visibility);

  if(visibility === "false") {
    navBar.setAttribute("aria-expanded", true);
  } else {
    navBar.setAttribute("aria-expanded", false);
  }
});