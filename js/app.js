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

//abrir selector de sede
var citySelector = document.getElementById("city-selector");
var selectCity = document.getElementById("select-city");
selectCity.onclick = function() {
    var chooseSede = document.getElementById("choose-sede");
    chooseSede.style.display = "block";
}

//sede lima
var chooseLIMA = document.getElementById("img-lima");
chooseLIMA.onclick = function() {
    var sedesContainer = document.getElementById("choose-sede");
    sedesContainer.style.display = "none";
    document.getElementById("peru-flag").style.display = "inline-block";
    document.getElementById("chile-flag").style.display = "none";
    document.getElementById("mex-flag").style.display = "none";
    createTabs()
    years()

    selectYear.onclick = function() {
        year16.style.display = "block";
        year17.style.display = "block";
        
        year16.onclick = function() {
            selectYear.innerHTML = "2016";
            year16.style.display = "none";
            year17.style.display = "none";

            generation()

            gen1.onclick = function() {
                var data1 = data["LIM"]["2016-1"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
            gen2.onclick = function() {
                var data1 = data["LIM"]["2016-2"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }           
        }

        year17.onclick = function() {
            selectYear.innerHTML = "2017";
            year16.style.display = "none";
            year17.style.display = "none";

            generation()

            gen1.onclick = function() {
                var data1 = data["LIM"]["2017-1"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
            gen2.onclick = function() {
                var data1 = data["LIM"]["2017-2"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
        }
    }
}

//sede arequipa
var chooseARQ = document.getElementById("img-arq");
chooseARQ.onclick = function() {
    var sedesContainer = document.getElementById("choose-sede");
    sedesContainer.style.display = "none";
    document.getElementById("peru-flag").style.display = "inline-block";
    document.getElementById("chile-flag").style.display = "none";
    document.getElementById("mex-flag").style.display = "none";
    createTabs()
    years()

    selectYear.onclick = function() {
        year16.style.display = "block";
        year17.style.display = "block";
        
        year16.onclick = function() {
            selectYear.innerHTML = "2016";
            year16.style.display = "none";
            year17.style.display = "none";

            generation()

            gen1.onclick = function() {
                var data1 = data["AQP"]["2016-1"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
            gen2.onclick = function() {
                var data1 = data["AQP"]["2016-2"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
        }

        year17.onclick = function() {
            selectYear.innerHTML = "2017";
            year16.style.display = "none";
            year17.style.display = "none";

            generation()

            gen1.onclick = function() {
                var data1 = data["AQP"]["2017-1"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
            gen2.onclick = function() {
                var data1 = data["AQP"]["2017-2"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
        }
    }
}

//sede santiago
var chooseSCL = document.getElementById("img-scl");
chooseSCL.onclick = function() {
    var sedesContainer = document.getElementById("choose-sede");
    sedesContainer.style.display = "none";
    document.getElementById("chile-flag").style.display = "inline-block";
    document.getElementById("peru-flag").style.display = "none";
    document.getElementById("mex-flag").style.display = "none";
    createTabs()
    years()

    selectYear.onclick = function() {
        year16.style.display = "block";
        year17.style.display = "block";
        
        year16.onclick = function() {
            selectYear.innerHTML = "2016";
            year16.style.display = "none";
            year17.style.display = "none";

            generation()

            gen1.onclick = function() {
                var data1 = data["SCL"]["2016-1"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
            gen2.onclick = function() {
                var data1 = data["SCL"]["2016-2"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
        }

        year17.onclick = function() {
            selectYear.innerHTML = "2017";
            year16.style.display = "none";
            year17.style.display = "none";

            generation()

            gen1.onclick = function() {
                var data1 = data["SCL"]["2017-1"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
            gen2.onclick = function() {
                var data1 = data["SCL"]["2017-2"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
        }
    }
}

//sede ciudad de méxico
var chooseMEX = document.getElementById("img-mex");
chooseMEX.onclick = function() {
    var sedesContainer = document.getElementById("choose-sede");
    sedesContainer.style.display = "none";
    document.getElementById("mex-flag").style.display = "inline-block";
    document.getElementById("chile-flag").style.display = "none";
    document.getElementById("peru-flag").style.display = "none";
    createTabs()
    years()

    selectYear.onclick = function() {
        year16.style.display = "block";
        year17.style.display = "block";
        
        year16.onclick = function() {
            selectYear.innerHTML = "2016";
            year16.style.display = "none";
            year17.style.display = "none";

            generation()

            gen1.onclick = function() {
                var data1 = data["CDMX"]["2016-1"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
            gen2.onclick = function() {
                var data1 = data["CDMX"]["2016-2"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
        }

        year17.onclick = function() {
            selectYear.innerHTML = "2017";
            year16.style.display = "none";
            year17.style.display = "none";

            generation()

            gen1.onclick = function() {
                var data1 = data["CDMX"]["2017-1"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
            gen2.onclick = function() {
                var data1 = data["CDMX"]["2017-2"]
                
              if (data1) {
                var data2 = data1["students"];
                getData(data2);
              } else {
                  alert("No data :(!")
              }
            }
        }
    }
}

//crear tabs
//elemento llamado del html
var bottomNav = document.getElementById("bottom-nav");
//crear elementos
var tabs = document.createElement("ul");
var tabsLi1 = document.createElement("li");
var tabsLi2 = document.createElement("li");
var tabsLi3 = document.createElement("li");
var tabOverview = document.createElement("h3");
var tabStudents = document.createElement("h3");
var tabTeachers = document.createElement("h3");

//attributes
tabs.setAttribute("id","tabs");
tabsLi1.setAttribute("id","overview");
tabsLi2.setAttribute("id","students");
tabsLi3.setAttribute("id","teachers");
//innerhtml
tabOverview.innerHTML = "OVERVIEW";
tabStudents.innerHTML = "STUDENTS";
tabTeachers.innerHTML = "TEACHERS";
//función
function createTabs() {
    bottomNav.appendChild(tabs);
    tabs.appendChild(tabsLi1);
    tabs.appendChild(tabsLi2);
    tabs.appendChild(tabsLi3);
    tabsLi1.appendChild(tabOverview);
    tabsLi2.appendChild(tabStudents);
    tabsLi3.appendChild(tabTeachers);

    //contenido de tabs
    var overviewContent = document.getElementById("overview-content");
    var studentsContent = document.getElementById("students-content");
    var teachersContent = document.getElementById("teachers-content");

    //overview
    tabsLi1.onclick = function() {
        overviewContent.style.display = "block";
        studentsContent.style.display = "none";
        teachersContent.style.display = "none";
    }

    //students
    tabsLi2.onclick = function() {
        overviewContent.style.display = "none";
        studentsContent.style.display = "block";
        teachersContent.style.display = "none";
    }
}

//función data students
function getData(studentData) {
    for (var i = 0 ; i < studentData.length ; i++) {
        if (studentData[i]["active"] == true) {
          //elementos creados
          var studentProfileContainer = document.createElement("div");
          var studentProfileData = document.createElement("div")
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

          var verPerfilCont = document.createElement("div");
          var verPerfil = document.createElement("p");
          var rightArrowIcon = document.createElement("i");

          //atributos
          studentProfileData.setAttribute("id","student-profile-data")
          studentProfileContainer.setAttribute("id","profile-container");
          studentPhoto.setAttribute("src",studentData[i]["photo"]);
          studentLeftContainer.setAttribute("id","student-left-container");
          studentName.setAttribute("id","student-name");
          specialization.setAttribute("id","speciality");
          studentRightContainer.setAttribute("id","student-right-container");
          verPerfilCont.setAttribute("id","ver-perfil-container");
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
          studentProfileContainer.appendChild(studentProfileData);
          studentProfileData.appendChild(studentLeftContainer);
          studentLeftContainer.appendChild(studentName);
          studentLeftContainer.appendChild(specialization);
          studentLeftContainer.appendChild(javascript);
          studentLeftContainer.appendChild(apis);
          studentLeftContainer.appendChild(jquery);

          studentProfileData.appendChild(studentRightContainer);
          studentRightContainer.appendChild(techContainer);
          techContainer.appendChild(techScore);
          techContainer.appendChild(tech);
          studentRightContainer.appendChild(hseContainer);
          hseContainer.appendChild(hseScore);
          hseContainer.appendChild(hse);
          studentRightContainer.appendChild(englishContainer);
          englishContainer.appendChild(englishSkills);
          englishContainer.appendChild(english);

          studentProfileData.appendChild(verPerfilCont)
          verPerfilCont.appendChild(verPerfil);
          verPerfil.appendChild(rightArrowIcon);
          

          //student name
          studentName.innerHTML = studentData[i]["name"];

          //función para porcentajes elementos array
          function convertToPercentages(arr, max) {
            return arr.map(function (d, i) {
                return ((100 * d) / max);}); 
            };
          //función sumar porcentajes
          function getSum(total, num) {
            return total + num;
        }

          //porcentaje de hse
          var data3 = studentData[i]["sprints"];
          var emptyScoreHSE = [];
          for (var j = 0 ; j < data3.length ; j++) {
          emptyScoreHSE.push(data3[j]["score"]["hse"]);
            var arrayResult = convertToPercentages(emptyScoreHSE,1200);
            var resultHSE = arrayResult.reduce(getSum) / data3.length
        }
          hseScore.innerHTML = resultHSE.toFixed(1) + "%";

          //porcentaje de hse
          var data3 = studentData[i]["sprints"];
          var emptyScoreTech = [];
          for (var j = 0 ; j < data3.length ; j++) {
          emptyScoreTech.push(data3[j]["score"]["tech"]);
            var arrayResult = convertToPercentages(emptyScoreTech,1800);
            var resultTech = arrayResult.reduce(getSum) / data3.length;
        }
          techScore.innerHTML = resultTech.toFixed(1) + "%";

        }
    }
};

//crear el selector de años
var yearSelector = document.createElement("ul");
var selectYear = document.createElement("li");
var year17 = document.createElement("li");
var year16 = document.createElement("li");

//atributos
yearSelector.setAttribute("id","year-selector");

//clases
selectYear.className = "year-option";
year16.className = "year-option";
year16.className = "year-option";
year17.className = "year-option";
function years() {
    selectYear.innerHTML = "YEAR"
    year16.innerHTML = "2016";
    year17.innerHTML = "2017";

    citySelector.appendChild(yearSelector);
    yearSelector.appendChild(selectYear);
    yearSelector.appendChild(year16);
    yearSelector.appendChild(year17);
}


//generaciones
var gen1 = document.createElement("h5");
var gen2 = document.createElement("h5");
gen1.innerHTML = "GENERACIÓN I";
gen2.innerHTML = "GENERACIÓN II";
function generation() {
    document.getElementById("generations").appendChild(gen1);
    document.getElementById("generations").appendChild(gen2);
}












 



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
                   
                   'height':300,
                   titleTextStyle:  {fontName: 'Muli',fontSize: 20,bold: true},
                   
                  };

    var chart = new google.visualization.BarChart(document.getElementById('students-meet-target'));
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
      }
    };

    var chart = new google.charts.Bar(document.getElementById('nps'));

    chart.draw(googleData, google.charts.Bar.convertOptions(options));
  }






  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart2);

   function drawChart2() {

      
  
      //data table.
      var googleData = new google.visualization.DataTable();
      googleData.addColumn('string', 'SPRINTS');
      googleData.addColumn('number', 'STUDENTS THAT MEET THE TARGET');
      googleData.addRows([
        ['S1', resultA],
        ['S2', resultC],
        ['S3', resultE]
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