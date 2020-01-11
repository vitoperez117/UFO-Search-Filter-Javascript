var tbody = d3.select("tbody");

data.forEach(function (data) {
    var row = tbody.append("tr")
    Object.entries(data).forEach (([key,value]) => {
        var cell = row.append("td");
        console.log(key, value);
        cell.text(value);
    })
});