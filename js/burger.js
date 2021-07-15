let menu = document.querySelector(".navbar");
let toggle = menu.querySelector(".toggler");
toggle.addEventListener("click", function(){
    menu.classList.toggle("menu");
});