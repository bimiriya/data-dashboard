var menu = document.getElementById("menu");
var menuDesplegable = document.getElementById("menu-desplegable");
var menUsername = document.getElementById("menu-username");

menu.onclick = function() {
    menu.style.display = "none";
    menuDesplegable.style.height = window.innerHeight + "px";
    menuDesplegable.style.display = "initial";
}

menUsername.onclick = function() {
    menuDesplegable.style.display = "none";
    menu.style.display = "initial";
}
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
