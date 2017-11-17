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
    overviewContent.style.display = "initial";
    studentsContent.style.display = "none";
    teachersContent.style.display = "none";
}

//funciones del tab students

students.onclick = function() {
    overviewContent.style.display = "none";
    studentsContent.style.display = "initial";
    teachersContent.style.display = "none";
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
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Activas', 4],
          ['Inactivas', 1],
        ]);

        // Set chart options
        var options = {'title':'total',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart-div-pie'));
        chart.draw(data, options);
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