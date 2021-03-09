const button = document.getElementById("showNavButton");
const background = document.getElementsByClassName("backgroundLayer")[0];
const navBar = document.querySelector("nav");

button.addEventListener("click", () => {
    console.log("click")
    navBar.classList.add("showNav");
    background.classList.add("showBackground");
});

background.addEventListener("click", () => {
    navBar.classList.remove("showNav");
    background.classList.remove("showBackground");
});