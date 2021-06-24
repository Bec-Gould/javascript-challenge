// from data.js
var tableData = data;
var tbody = d3.select("tbody")

// YOUR CODE HERE!

function newTable() {
tableData.forEach(function(Sighting) {
    console.log(Sighting);
    var row = tbody.append("tr");
    Object.entries(Sighting).forEach(function([key, value]) {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
   
    });
});
};


var button = d3.select("#filter-btn");
var form = d3.select("#filters");


function runEnter() {

    // d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    // console.log(tableData);

    if (inputValue) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);
    // newTable(filteredData); 
    }
    // newTable(filteredData);
       
}

button.on("click", runEnter);
button.on("submit", runEnter);

newTable(tableData);
// newTable(tableData); 
