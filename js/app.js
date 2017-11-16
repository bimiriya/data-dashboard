var menu = document.getElementById("menu");

//elementos creados para el menu
var contenedorMenu = document.createElement("div");
var content = document.createElement("ul");
var menuName = document.createElement("li");
var addStudent = document.createElement("li");
var removeStudent = document.createElement("li");
var addSprint = document.createElement("li");

var menuContent = addStudent, removeStudent;

//atributos
contenedorMenu.setAttribute("id","contenedor-menu");
menuContent.setAttribute("id","menu-content");

var ayy = document.createTextNode("VALENTINA SMITH");



/*contenido de elementos creados
menuName.innerHTML = "VALENTINA SMITH";
addStudent.innerHTML = "Add student";
removeStudent.innerHTML = "Remove student";
addSprint.innerHTML = "Add sprint";*/

menu.onclick = function() {
    
    menu.appendChild(contenedorMenu);
    contenedorMenu.appendChild(content);
    content.appendChild(menuName);
    menuName.appendChild(ayy);
    content.appendChild(addStudent);
    content.appendChild(removeStudent);
    content.appendChild(addSprint);
    
}

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
