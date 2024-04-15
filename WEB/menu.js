const menuBar = document.querySelector(".menu-bar");
const cancel = document.querySelector(".cancel");
const navLinks = document.querySelector(".nav-links");

menuBar.onclick = function(){
    navLinks.classList.add("active");
    menuBar.classList.add("hide");
    cancel.classList.add("show");
}

cancel.onclick = function(){
    navLinks.classList.remove("active");
    menuBar.classList.remove("hide");
    cancel.classList.remove("show");
}