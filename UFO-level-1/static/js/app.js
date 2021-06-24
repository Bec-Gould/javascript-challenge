// from data.js
var tableData = data;
var tbody = d3.select("tbody")

// Create new function to build table

function newTable(myData) {
myData.forEach(function(Sighting) {
    console.log(Sighting);
    var row = tbody.append("tr");
    Object.entries(Sighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
   
    });
});
};

var button = d3.select("#filter-btn");
var form = d3.select("#filters");


function runEnter() {

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    if (inputValue) {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
        tbody.html("");
        newTable(filteredData); 
    }
       
}

button.on("click", runEnter);
button.on("submit", runEnter);

newTable(tableData);

