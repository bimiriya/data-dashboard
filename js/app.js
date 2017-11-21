//función para el menu desplegable
//elementos recuperados del html
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

//función del menu sedes
//elementos recuperados del html
var sedes = document.getElementById("sedes");
var menuSedes = document.getElementById("menu-sedes");
var caretDownIcon = document.getElementById("caret-down");
var sedeLIMA = document.getElementById("sede-lima");
var sedeARQ = document.getElementById("sede-arq");
var sedeSCL = document.getElementById("sede-scl");
var sedeMex = document.getElementById("sede-mex");
var years = document.getElementById("years");
var switches = document.getElementById("switches");

//desplegar menu
sedes.onmouseover = function() {
    menuSedes.style.display = "block";
    sedes.style.borderBottomLeftRadius = "0px";
    sedes.style.borderBottomRightRadius = "0px";
    caretDownIcon.style.visibility = "hidden";
}

menuSedes.onmouseleave = function() {
    menuSedes.style.display = "none";
    sedes.style.borderBottomLeftRadius = "4px";
    sedes.style.borderBottomRightRadius = "4px";
    caretDownIcon.style.visibility = "visible";
}

//lima
sedeLIMA.onclick = function() {
    menuSedes.style.display = "none";
    var sede = document.getElementById("sede");
    sede.innerHTML = "LIMA";
    sedeLIMA.style.display = "none";
    sedeARQ.style.display = "block";
    sedeSCL.style.display = "block";
    sedeMex.style.display = "block";
    sedes.style.borderBottomLeftRadius = "4px";
    sedes.style.borderBottomRightRadius = "4px";
    caretDownIcon.style.display = "none";
    years.style.display = "inline-block";
    switches.style.display = "block";
}

//arequipa
sedeARQ.onclick = function() {
    menuSedes.style.display = "none";
    var sede = document.getElementById("sede");
    sede.innerHTML = "AREQUIPA";
    sedeLIMA.style.display = "block";
    sedeARQ.style.display = "none";
    sedeSCL.style.display = "block";
    sedeMex.style.display = "block";
    sedes.style.borderBottomLeftRadius = "4px";
    sedes.style.borderBottomRightRadius = "4px";
    caretDownIcon.style.display = "none";
    years.style.display = "inline-block";
    switches.style.display = "block";    
}

//santiago
sedeSCL.onclick = function() {
    menuSedes.style.display = "none";
    var sede = document.getElementById("sede");
    sede.innerHTML = "SANTIAGO";
    sedeLIMA.style.display = "block";
    sedeARQ.style.display = "block";
    sedeSCL.style.display = "none";
    sedeMex.style.display = "block";
    sedes.style.borderBottomRightRadius = "4px";
    sedes.style.borderBottomLeftRadius = "4px";
    caretDownIcon.style.display = "none";
    years.style.display = "inline-block";
    switches.style.display = "block";    
}

//ciudad de méxico
sedeMex.onclick = function() {
    menuSedes.style.display = "none";
    var sede = document.getElementById("sede");
    sede.innerHTML = "CIUDAD DE MÉXICO";
    sedeLIMA.style.display = "block";
    sedeARQ.style.display = "block";
    sedeSCL.style.display = "block";
    sedeMex.style.display = "none";
    sedes.style.borderBottomLeftRadius = "4px";
    sedes.style.borderBottomRightRadius = "4px";
    caretDownIcon.style.display = "none";
    years.style.display = "inline-block";
    switches.style.display = "block";    
}


//funciones para mostrar el contenido de las tabs
//elementos recuperados del html
var overview = document.getElementById("overview");
var overviewContent = document.getElementById("charts");
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
    
    var slider172 = document.getElementById("gen172");
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
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);




    //----------gráficas-----------------
    
    //función para gráfico de estudiantes activas e inactivas
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart1);
    
      function drawChart1() {
        var data1 = data["SCL"]["2017-1"];
        var data2 = data1["students"];
        var contador1 = 0;
        var contador2 = 0;
        for (var i = 0 ; i < data2.length ; i++) {
            if (data2[i]["active"] == true) {
                contador1++
            } else {
                contador2++
            }
        }
        // data table.
        var googleData = new google.visualization.DataTable();
        googleData.addColumn('string', "Estado");
        googleData.addColumn('number', "Cantidad de alumnas");
        googleData.addRows([
          ['Active', contador1],
          ['Dropouts', contador2],
        ]);

        // chart options
        var options = {'title':'ENROLLMENT',
                       'width': 270,
                       'height':200,
                       'colors': ['#fbbd00', '#ffd781'],
                        titleTextStyle:  {fontName: 'Muli',fontSize: 20,bold: true},
                        chartArea:{left:20,top:30,width:'100%',height:'80%'}
                        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart-div-pie'));
        chart.draw(googleData, options);
      };


      //función logros en general
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {
        var data1 = data["SCL"]["2017-1"];
        var data2 = data1["students"];
        var empty1 = [];
        var empty2 = [];
        var empty3 = [];
        var empty4 = [];
        var empty5 = [];
        var empty6 = [];
        for (var i = 0 ; i < data2.length ; i++) {
            //sprint1
            if (data2[i]["active"] == true) {
            data3A = data2[i]["sprints"][0]["score"]["tech"];
            empty1.push(data3A);

            function calcularTech(array) {
                resultados = [];
                for (var i = 0 ; i < array.length ; i++) {
                    resultados.push((array[i] * 100) / 1800)
                } return resultados;
            } var resultA = calcularTech(empty1);


            data3B = data2[i]["sprints"][0]["score"]["hse"];
            empty2.push(data3B);

            function calcularHSE(array) {
                resultados = [];
                for (var i = 0 ; i < array.length ; i++) {
                    resultados.push((array[i] * 100) / 1200)
                } return resultados
            } var resultB = calcularHSE(empty2);

            function sumScores(a,b) {
                var sum = a.map(function (num, idx) {
                    return (num + b[idx]) / 2;
                  });
                var finalResult = [];
                for (var x = 0 ; x < sum.length ; x++) {
                    if (sum[x] >= 70) {
                        finalResult.push(sum[x])
                    }
                } return finalResult.length;
            } var sprint1 = sumScores(resultA,resultB);

            //sprint 2
            data3C = data2[i]["sprints"][1]["score"]["tech"];
            empty3.push(data3C);
            var resultC = calcularTech(empty3);

            data3D = data2[i]["sprints"][1]["score"]["hse"];
            empty4.push(data3D);
            var resultD = calcularHSE(empty4);
            var sprint2 = sumScores(resultC,resultD);                

            //sprint 3
            data3E = data2[i]["sprints"][2]["score"]["tech"];
            empty5.push(data3E);
            var resultE = calcularTech(empty5);

            data3F = data2[i]["sprints"][2]["score"]["hse"];
            empty6.push(data3F);
            var resultF = calcularHSE(empty6);
            var sprint3 = sumScores(resultE,resultF);
        }
    }
        var googleData = google.visualization.arrayToDataTable([
          ['Year', 'Students that meet the target'],
          ['S1',  sprint1],
          ['S2',  sprint2],
          ['S3',  sprint3]
        ]);

        var options = {
          title: 'ACHIEVEMENT',
          titleTextStyle:  {fontName: 'Muli',fontSize: 20,bold: true},
          chartArea:{left:20,top:30,width:'70%',height:'80%'},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(googleData, options);
      }



//función para gráfico de logros por sprint
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart4);

     function drawChart4() {
       
            var data1 = data["SCL"]["2017-1"];
            var data2 = data1["students"];
            var empty1 = [];
            var empty2 = [];
            var empty3 = [];
            var empty4 = [];
            var empty5 = [];
            var empty6 = [];
            for (var i = 0 ; i < data2.length ; i++) {
                //sprint1
                if (data2[i]["active"] == true) {
                data3A = data2[i]["sprints"][0]["score"]["tech"];
                empty1.push(data3A);

                function calcularTech(array) {
                    resultados = [];
                    for (var i = 0 ; i < array.length ; i++) {
                        resultados.push((array[i] * 100) / 1800)
                    } return resultados;
                } var resultA = calcularTech(empty1);


                data3B = data2[i]["sprints"][0]["score"]["hse"];
                empty2.push(data3B);

                function calcularHSE(array) {
                    resultados = [];
                    for (var i = 0 ; i < array.length ; i++) {
                        resultados.push((array[i] * 100) / 1200)
                    } return resultados
                } var resultB = calcularHSE(empty2);
    
                function sumScores(a,b) {
                    var sum = a.map(function (num, idx) {
                        return (num + b[idx]) / 2;
                      });
                    var finalResult = [];
                    for (var x = 0 ; x < sum.length ; x++) {
                        if (sum[x] >= 70) {
                            finalResult.push(sum[x])
                        }
                    } return finalResult.length;
                } var sprint1 = sumScores(resultA,resultB);

                //sprint 2
                data3C = data2[i]["sprints"][1]["score"]["tech"];
                empty3.push(data3C);
                var resultC = calcularTech(empty3);

                data3D = data2[i]["sprints"][1]["score"]["hse"];
                empty4.push(data3D);
                var resultD = calcularHSE(empty4);
                var sprint2 = sumScores(resultC,resultD);                

                //sprint 3
                data3E = data2[i]["sprints"][2]["score"]["tech"];
                empty5.push(data3E);
                var resultE = calcularTech(empty5);

                data3F = data2[i]["sprints"][2]["score"]["hse"];
                empty6.push(data3F);
                var resultF = calcularHSE(empty6);
                var sprint3 = sumScores(resultE,resultF);
            }
        }
        
    
        //data table.
        var googleData = new google.visualization.DataTable();
        googleData.addColumn('string', 'SPRINTS');
        googleData.addColumn('number', 'STUDENTS THAT MEET THE TARGET');
        googleData.addRows([
          ['S1', sprint1],
          ['S2', sprint2],
          ['S3', sprint3]
        ]);

        //options
        var options = {'title':'ACHIEVEMENT',
                       'width':500,
                       'height':300,
                       titleTextStyle:  {fontName: 'Muli',fontSize: 20,bold: true},
                       chartArea:{left:20,top:30,width:'80%',height:'80%'}
                      };

        var chart = new google.visualization.BarChart(document.getElementById('chart-div-bar'));
        chart.draw(googleData, options);
      }

      
      


      //función nps
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {

        var data1 = data["SCL"]["2017-1"];
        var data2 = data1["ratings"];
        var detractorsArray = [];
        var passiveArray = [];
        var promotersArray = [];

        for (var i = 0 ; i < data2.length ; i++) {
            var detractors = data2[i]["nps"]["detractors"];
            detractorsArray.push(detractors)
            var passive = data2[i]["nps"]["passive"];
            passiveArray.push(passive)
            var promoters = data2[i]["nps"]["promoters"];
            promotersArray.push(promoters);
        }

        var googleData = google.visualization.arrayToDataTable([
            ['SPRINTS', 'Detractors',        'Passive',          'Promoters'],
            ['S1',  detractorsArray[0],   passiveArray[0],     promotersArray[0]],      
            ['S2',  detractorsArray[1],   passiveArray[1],     promotersArray[1]],
            ['S3',  detractorsArray[2],   passiveArray[2],     promotersArray[2]]
        ]);

        var options = {
          chart: {
            title: 'NET PROMOTER SCORE',
            titleTextStyle:  {fontName: 'Muli',fontSize: 20,bold: true},
            chartArea:{left:20,top:30,width:'100%',height:'80%'}
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(googleData, google.charts.Bar.convertOptions(options));
      }

      