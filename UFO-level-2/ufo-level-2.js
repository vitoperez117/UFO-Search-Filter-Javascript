var ufoRecords = data;

var filterButton = d3.select("#filter-btn");

filterButton.on("click", function () {

    d3.event.preventDefault();

    var dateInputValue = d3.select("#datetime").property("value");
    var filteredByDate = ufoRecords.filter(entry  => entry.datetime === dateInputValue);

    // var cityInputValue = d3.select("#city").property("value");
    // var filteredByCity =filteredByDate.filter(entry => entry.city === cityInputValue);

    // var stateInputValue = d3.select("#state").property("value");
    // var filteredByState = filteredByCity.filter(entry => entry.state === stateInputValue);

    // var countryInputValue = d3.select("#country").property("value");
    // var filteredByCountry = filteredByCity.filter(entry => entry.country === countryInputValue);

    // var ufoShapeInputValue = d3.select("#ufo-shape").property("value");
    // var filteredData = filteredByDate.filter(entryShape => entryShape.ufoShapeInputValue);

    var tbody = d3.select("tbody")

    tbody.html("");
    
    filteredByDate.forEach((filteredByDate) => {
        var row = tbody.append("tr")
        Object.entries(filteredByDate).forEach (function([key,value]) {
            var cell = row.append("td");
            cell.text(value);
            })
    })
});