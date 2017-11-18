var menu = document.getElementById("menu");
var menuDesplegable = document.getElementById("menu-desplegable");
var menUsername = document.getElementById("menu-username");

menu.onclick = function() {
    menu.style.display = "none";
    menuDesplegable.style.height = window.innerHeight + "px";
    menuDesplegable.style.display = "initial";
    menuDesplegable.style.position = "fixed";
}

menUsername.onclick = function() {
    menuDesplegable.style.display = "none";
    menu.style.display = "initial";
}

var overview = document.getElementById("overview");
var overviewContent = document.getElementById("upp");
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
    function alumnas() {
        var data1 = data["SCL"]["2017-2"];
        var data2 = data1["students"]
        if (studentsContent.style.display = "block"); {
          for (var i = 0 ; i < data2.length ; i++) {
              if (data2[i]["active"] != false) {
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
                specialization.setAttribute("id","specialization");
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
                var data4C = data3[0]["score"]["hse"];
                var data4D = data3[1]["score"]["hse"];

                var resultadoC = (data4C * 100) / 1200;
                var resultadoD = (data4D * 100) / 1200;
                var resultadoHSE = (resultadoC + resultadoD) / 2;
  
                hseScore.innerHTML = resultadoHSE.toFixed(1);
              }
          }
      }
  }
  alumnas()
}


teachers.onclick = function() {
    overviewContent.style.display = "none";
    studentsContent.style.display = "none";
    teachersContent.style.display = "initial";
}
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);




	//gráficas
    google.charts.load('current', {'packages':['corechart']}); // Load the Visualization API and the corechart package.

    google.charts.setOnLoadCallback(drawChart1);// Set a callback to run when the Google Visualization API is loaded.
      										// Callback that creates and populates a data table,
      										// instantiates the pie chart, passes in the data and
      										// draws it.
      function drawChart1() {
        // Create the data table.
        var googleData = new google.visualization.DataTable();
        googleData.addColumn('string', 'Topping');
        googleData.addColumn('number', 'Slices');
        googleData.addRows([
          ['Activas', 4],
          ['Inactivas', 1],
        ]);

        // Set chart options
        var options = {'title':'total',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart-div-pie'));
        chart.draw(googleData, options);
      }

google.charts.load('current', {'packages':['corechart']}); // Load the Visualization API and the corechart package.

    google.charts.setOnLoadCallback(drawChart2);// Set a callback to run when the Google Visualization API is loaded.
      										// Callback that creates and populates a data table,
      										// instantiates the pie chart, passes in the data and
      										// draws it.
     function drawChart2() {

     	   
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2],
        ]);

        // Set chart options
        var options = {'title':'total',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart-div-bar'));
        chart.draw(data, options);
      }