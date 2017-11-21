//función menu desplegable
//elementos recuperados del html
var menu = document.getElementById("menu");
var menuDesplegable = document.getElementById("menu-desplegable");
var menuUsername = document.getElementById("menu-username");

//abrir
menu.onclick = function() {
    menu.style.display = "none";
    menuDesplegable.style.height = window.innerHeight + "px";
    menuDesplegable.style.display = "initial";
    menuDesplegable.style.position = "fixed";
}

//cerrar
menuUsername.onclick = function() {
    menuDesplegable.style.display = "none";
    menu.style.display = "initial";
}

//función menu sedes
//elementos recuperados del html
var sedes = document.getElementById("sedes");
var menuSedes = document.getElementById("menu-sedes");
var sedeLima = document.getElementById("sede-lima");
var sedeARQ = document.getElementById("sede-arq");
var sedeSCL = document.getElementById("sede-scl");
var sedeMex = document.getElementById("sede-mex");

//elementos para generaciónes recuperados del html
var years = document.getElementById("years");
var switches = document.getElementById("switches");

//desplegar menu
sedes.onmouseover = function() {
    //estilos
        menuSedes.style.display = "block";
        sedes.style.borderBottomLeftRadius = "0px";
}

//esconder menu
menuSedes.onmouseleave = function() {
    //estilos
    menuSedes.style.display = "none";
    sedes.style.borderBottomLeftRadius = "4px";
    sedes.style.borderBottomRightRadius = "4px";
}

//funcion crear checkboxes por medio de opciones del menu desplegable
//elementos creados
var chbx15 = document.createElement("input");
var span15 = document.createElement("span");
var chbx16 = document.createElement("input");
var span16 = document.createElement("span");
var chbx17 = document.createElement("input");
var span17 = document.createElement("span");

function checkboxes() {   
    //atributos
    chbx15.setAttribute("type","checkbox");
    chbx16.setAttribute("type","checkbox");
    chbx17.setAttribute("type","checkbox");

    //innerhtml
    span15.innerHTML = "2015";
    span16.innerHTML = "2016";
    span17.innerHTML = "2017";

    //elementos apendizados
    years.appendChild(chbx15);
    years.appendChild(span15);
    years.appendChild(chbx16);
    years.appendChild(span16);
    years.appendChild(chbx17);
    years.appendChild(span17);

    chbx17.onclick = function() {
        switches.style.display = "block";
    }
}

//opciones
//lima
var years = document.getElementById("years")
sedeLima.onclick = function() {
    //elemento recuperado del html
    var sede = document.getElementById("sede")

    menuSedes.style.display = "none";
    sede.innerHTML = "LIMA";

    //estilos
    sedeLima.style.display = "none";
    sedeARQ.style.display = "block";
    sedeSCL.style.display = "block";
    sedeMex.style.display = "block";
    sedes.style.borderBottomLeftRadius = "4px";
    sedes.style.borderBottomRightRadius = "4px";
    checkboxes();
}

//arequipa
sedeARQ.onclick = function() {
    //elemento recuperado del html
    var sede = document.getElementById("sede")

    menuSedes.style.display = "none";
    sede.innerHTML = "AREQUIPA";

    //estilos
    sedeLima.style.display = "block";
    sedeARQ.style.display = "none";
    sedeSCL.style.display = "block";
    sedeMex.style.display = "block";
    sedes.style.borderBottomLeftRadius = "4px";
    sedes.style.borderBottomRightRadius = "4px";
    checkboxes();
}

//santiago
sedeSCL.onclick = function() {
    //elemento recuperado del html
    var sede = document.getElementById("sede")

    menuSedes.style.display = "none";
    sede.innerHTML = "SANTIAGO";

    //estilos
    sedeLima.style.display = "block";
    sedeARQ.style.display = "block";
    sedeSCL.style.display = "none";
    sedeMex.style.display = "block";
    sedes.style.borderBottomLeftRadius = "4px";
    sedes.style.borderBottomRightRadius = "4px";
    checkboxes();
}

//mexico
sedeMex.onclick = function() {
    //elemento recuperado del html
    var sede = document.getElementById("sede")

    menuSedes.style.display = "none";
    sede.innerHTML = "CIUDAD DE MÉXICO";

    //estilos
    sedeLima.style.display = "block";
    sedeARQ.style.display = "block";
    sedeSCL.style.display = "block";
    sedeMex.style.display = "none";
    sedes.style.borderBottomLeftRadius = "4px";
    sedes.style.borderBottomRightRadius = "4px";
    checkboxes();
}
//funciones para mostrar el contenido de las tabs
//elementos recuperados del html
var overview = document.getElementById("overview");
var overviewContent = document.getElementById("overview-content");
var students = document.getElementById("students");
var studentsContent = document.getElementById("students-content");
var teachers = document.getElementById("teachers");
var teachersContent = document.getElementById("teachers-content");

overview.onclick = function() {
    overviewContent.style.display = "block";
    studentsContent.style.display = "none";
    teachersContent.style.display = "none";
}

//funciones del tab students
var studenstList = document.getElementById("students-list");
students.onclick = function() {
    overviewContent.style.display = "none";
    studentsContent.style.display = "block";
    teachersContent.style.display = "none";
  
    //función para la info de las estudiantes traída desde data
    //SCL 2017-1
    var checkbox17 = document.getElementById("checkbox171");
    var slider171 = document.getElementById("scl171");
    
    var slider172 = document.getElementById("scl172");
    slider171.onclick = function() {
            var data1 = data["SCL"]["2017-1"];
            var data2 = data1["students"]
            if (studentsContent.style.display = "block"); {
              for (var i = 0 ; i < data2.length ; i++) {
                  if (data2[i]["active"] == true) {
                    //elementos creados
                    var studentProfileContainer = document.createElement("div");
                    var studentPhoto = document.createElement("img");
    
                    var studentLeftContainer = document.createElement("div");
                    var studentName = document.createElement("h2");
                    var specialization = document.createElement("p");
                    var javascript = document.createElement("p");
                    var apis = document.createElement("p");
                    var jquery = document.createElement("p");
    
                    var studentRightContainer = document.createElement("div");
                    var techContainer = document.createElement("div");
                    var techScore = document.createElement("h4");
                    var tech = document.createElement("span");
                    var hseContainer = document.createElement("div");
                    var hseScore = document.createElement("h4");
                    var hse = document.createElement("span");
                    var englishContainer = document.createElement("div");
                    var englishSkills = document.createElement("h5");
                    var english = document.createElement("span");
    
                    var verPerfil = document.createElement("p");
                    var rightArrowIcon = document.createElement("i");
      
                    //atributos
                    studentProfileContainer.setAttribute("id","profile-container");
                    studentPhoto.setAttribute("src",data2[i]["photo"]);
                    studentLeftContainer.setAttribute("id","student-left-container");
                    studentName.setAttribute("id","student-name");
                    specialization.setAttribute("id","speciality");
                    studentRightContainer.setAttribute("id","student-right-container");
                    verPerfil.setAttribute("id","ver-perfil");
    
                    //clases
                    javascript.className = "tags";
                    apis.className = "tags";
                    jquery.className = "tags";
                    techContainer.className = "grey-square";
                    hseContainer.className = "grey-square";
                    englishContainer.className = "grey-square";
    
                    rightArrowIcon.classList.add("fa","fa-caret-right");
    
                    //nodos de texto insertados por medio de innerhtml
                    specialization.innerHTML = "Front-end Developer";
                    englishSkills.innerHTML = "INTERM";
                    tech.innerHTML = "TECH SKILLS";
                    hse.innerHTML = "LIFE SKILLS";
                    english.innerHTML = "ENGLISH SKILLS";
                    javascript.innerHTML = "JAVASCRIPT";
                    apis.innerHTML = "APIs";
                    jquery.innerHTML = "JQUERY";
                    verPerfil.innerHTML = "View profile";
      
                    //elementos apendizados
                    document.getElementById("students-list").appendChild(studentProfileContainer);
                    studentProfileContainer.appendChild(studentPhoto);
                    studentProfileContainer.appendChild(studentLeftContainer);
                    studentLeftContainer.appendChild(studentName);
                    studentLeftContainer.appendChild(specialization);
                    studentLeftContainer.appendChild(javascript);
                    studentLeftContainer.appendChild(apis);
                    studentLeftContainer.appendChild(jquery);
    
                    studentProfileContainer.appendChild(studentRightContainer);
                    studentRightContainer.appendChild(techContainer);
                    techContainer.appendChild(techScore);
                    techContainer.appendChild(tech);
                    studentRightContainer.appendChild(hseContainer);
                    hseContainer.appendChild(hseScore);
                    hseContainer.appendChild(hse);
                    studentRightContainer.appendChild(englishContainer);
                    englishContainer.appendChild(englishSkills);
                    englishContainer.appendChild(english);
    
                    studentProfileContainer.appendChild(verPerfil);
                    verPerfil.appendChild(rightArrowIcon);
                    
      
                    //student name
                    studentName.innerHTML = data2[i]["name"];
      
                    //porcentaje de tech
                    var data3 = data2[i]["sprints"];
    
                    var data4A = data3[0]["score"]["tech"];
                    var data4B = data3[1]["score"]["tech"];
                    var data4C = data3[2]["score"]["tech"];
      
                    var resultadoA = (data4A * 100) / 1800;
                    var resultadoB = (data4B * 100) / 1800;
                    var resultadoC = (data4C * 100) / 1800;
                    var resultadoTech = (resultadoA + resultadoB + resultadoC) / 3;
      
                    techScore.innerHTML = resultadoTech.toFixed(1);
    
                    //porcentaje hse
                    var data4D = data3[0]["score"]["hse"];
                    var data4E = data3[1]["score"]["hse"];
                    var data4F = data3[2]["score"]["hse"];
    
                    var resultadoD = (data4D * 100) / 1200;
                    var resultadoE = (data4E * 100) / 1200;
                    var resultadoF = (data4F * 100) / 1200;
                    var resultadoHSE = (resultadoD + resultadoE + resultadoF) / 3;
      
                    hseScore.innerHTML = resultadoHSE.toFixed(1);
                  }
              }
          }
      
      
        }

        slider172.onclick = function() {

            var data1 = data["SCL"]["2017-2"];
            var data2 = data1["students"]
            if (studentsContent.style.display = "block"); {
              for (var i = 0 ; i < data2.length ; i++) {
                  if (data2[i]["active"] == true) {
                    //elementos creados
                    var studentProfileContainer = document.createElement("div");
                    var studentPhoto = document.createElement("img");
    
                    var studentLeftContainer = document.createElement("div");
                    var studentName = document.createElement("h2");
                    var specialization = document.createElement("p");
                    var javascript = document.createElement("p");
                    var apis = document.createElement("p");
                    var jquery = document.createElement("p");
    
                    var studentRightContainer = document.createElement("div");
                    var techContainer = document.createElement("div");
                    var techScore = document.createElement("h4");
                    var tech = document.createElement("span");
                    var hseContainer = document.createElement("div");
                    var hseScore = document.createElement("h4");
                    var hse = document.createElement("span");
                    var englishContainer = document.createElement("div");
                    var englishSkills = document.createElement("h5");
                    var english = document.createElement("span");
    
                    var verPerfil = document.createElement("p");
                    var rightArrowIcon = document.createElement("i");
      
                    //atributos
                    studentProfileContainer.setAttribute("id","profile-container");
                    studentPhoto.setAttribute("src",data2[i]["photo"]);
                    studentLeftContainer.setAttribute("id","student-left-container");
                    studentName.setAttribute("id","student-name");
                    specialization.setAttribute("id","speciality");
                    studentRightContainer.setAttribute("id","student-right-container");
                    verPerfil.setAttribute("id","ver-perfil");
    
                    //clases
                    javascript.className = "tags";
                    apis.className = "tags";
                    jquery.className = "tags";
                    techContainer.className = "grey-square";
                    hseContainer.className = "grey-square";
                    englishContainer.className = "grey-square";
    
                    rightArrowIcon.classList.add("fa","fa-caret-right");
    
                    //nodos de texto insertados por medio de innerhtml
                    specialization.innerHTML = "Front-end Developer";
                    englishSkills.innerHTML = "INTERM";
                    tech.innerHTML = "TECH SKILLS";
                    hse.innerHTML = "LIFE SKILLS";
                    english.innerHTML = "ENGLISH SKILLS";
                    javascript.innerHTML = "JAVASCRIPT";
                    apis.innerHTML = "APIs";
                    jquery.innerHTML = "JQUERY";
                    verPerfil.innerHTML = "View profile";
      
                    //elementos apendizados
                    document.getElementById("students-list").appendChild(studentProfileContainer);
                    studentProfileContainer.appendChild(studentPhoto);
                    studentProfileContainer.appendChild(studentLeftContainer);
                    studentLeftContainer.appendChild(studentName);
                    studentLeftContainer.appendChild(specialization);
                    studentLeftContainer.appendChild(javascript);
                    studentLeftContainer.appendChild(apis);
                    studentLeftContainer.appendChild(jquery);
    
                    studentProfileContainer.appendChild(studentRightContainer);
                    studentRightContainer.appendChild(techContainer);
                    techContainer.appendChild(techScore);
                    techContainer.appendChild(tech);
                    studentRightContainer.appendChild(hseContainer);
                    hseContainer.appendChild(hseScore);
                    hseContainer.appendChild(hse);
                    studentRightContainer.appendChild(englishContainer);
                    englishContainer.appendChild(englishSkills);
                    englishContainer.appendChild(english);
    
                    studentProfileContainer.appendChild(verPerfil);
                    verPerfil.appendChild(rightArrowIcon);
                    
      
                    //student name
                    studentName.innerHTML = data2[i]["name"];
      
                    //porcentaje de tech
                    var data3 = data2[i]["sprints"];
    
                    var data4A = data3[0]["score"]["tech"];
                    var data4B = data3[1]["score"]["tech"];
                    
      
                    var resultadoA = (data4A * 100) / 1800;
                    var resultadoB = (data4B * 100) / 1800;
                    
                    var resultadoTech = (resultadoA + resultadoB) / 2;
      
                    techScore.innerHTML = resultadoTech.toFixed(1);
    
                    //porcentaje hse
                    var data4D = data3[0]["score"]["hse"];
                    var data4E = data3[1]["score"]["hse"];
                    
    
                    var resultadoD = (data4D * 100) / 1200;
                    var resultadoE = (data4E * 100) / 1200;
                    
                    var resultadoHSE = (resultadoD + resultadoE) / 2;
      
                    hseScore.innerHTML = resultadoHSE.toFixed(1);
                  }
              }
          }
      
      
        }
}


teachers.onclick = function() {
    overviewContent.style.display = "none";
    studentsContent.style.display = "none";
    teachersContent.style.display = "initial";
}