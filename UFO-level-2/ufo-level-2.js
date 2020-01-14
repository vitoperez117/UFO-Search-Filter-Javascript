var ufoRecords = data;

var filterButton = d3.select("#filter-btn");

filterButton.on("click", function () {

    d3.event.preventDefault();

    var dateInput = d3.select("#datetime");

    var inputValue = dateInput.property("value");

    var filteredData = ufoRecords.filter(entry  => entry.datetime === inputValue);

    console.log(filteredData);

    var tbody = d3.select("tbody")

    tbody.html("");
    
    filteredData.forEach((filteredData) => {
        var row = tbody.append("tr")
        Object.entries(filteredData).forEach (function([key,value]) {
            var cell = row.append("td");
            cell.text(value);
            })
    console.log(filteredData.map(x => x.shape));
    })


});