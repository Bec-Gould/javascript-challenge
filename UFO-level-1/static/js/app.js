// from data.js
var tableData = data;
var tbody = d3.select("tbody")

// YOUR CODE HERE!
tableData.forEach(function(Sighting) {
    console.log(Sighting);
});


tableData.forEach(function(Sighting) {
    console.log(Sighting);
    var row = tbody.append("tr");
    Object.entries(Sighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});