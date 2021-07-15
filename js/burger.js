let menu = document.querySelector(".navbar");
let toggle_open = menu.querySelector(".toggler-open");
let toggle_close = menu.querySelector(".toggler-close")
toggle_open.addEventListener("click", function(){
    menu.classList.remove("menu-close");
    menu.classList.add("menu-open");
});

toggle_close.addEventListener("click", function(){
    menu.classList.add("menu-close");
    menu.classList.remove("menu-open");
});