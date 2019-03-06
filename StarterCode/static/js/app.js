// from data.js
// var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);

// // Load all data into table in html
// var tbody = d3.select("tbody");
// data.forEach(element => {
//     console.log(element);
//     var trow = tbody.append("tr");
//     Object.entries(element).forEach(([key, value]) =>{
//         var tdata = trow.append("td");
//         tdata.text(value);
//     });
// });

// select filter table button
var filterButton = d3.select("button#filter-btn");

// get search data value
filterButton.on("click", function() {
    d3.event.preventDefault();
    var inputDatetime = d3.select("input#datetime").property("value");
    d3.select("input#datetime").node().value = "";

    var inputCity = d3.select("input#city").property("value");
    d3.select("input#city").node().value = "";    

    var inputState = d3.select("select#state").property("value").toLowerCase();
    d3.select("select#state").node().value = "Select a State";

    var inputCountry = d3.select("select#country").property("value");
    d3.select("select#country").node().value = "Select a Country";

    var inputShape = d3.select("input#shape").property("value");
    d3.select("input#shape").node().value = "";  


    // Use multiple input to filter the data
    var tableData = data;
    if (inputDatetime !== ""){
        tableData = tableData.filter(entry => entry.datetime===inputDatetime);
    }
    if (inputCity !== ""){
        tableData = tableData.filter(entry => entry.city === inputCity);
    }
    if (inputState !== "select a state"){
        tableData = tableData.filter(entry => entry.state === inputState);
    }
    if (inputCountry !== "Select a Country"){
        tableData = tableData.filter(entry => entry.country === inputCountry);
    }
    if (inputShape !== ""){
        tableData = tableData.filter(entry => entry.shape === inputShape);
    }
    matchData = tableData;

    console.log(matchData);

    // clear table content before new search
    d3.selectAll("tbody>*").remove();
    // load filtered data
    var tbody = d3.select("tbody");
    matchData.forEach(element => {
        console.log(element);
        var trow = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) =>{
            var tdata = trow.append("td");
            tdata.text(value);
        });
    });  
});
