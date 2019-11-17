// ALIEN MANIPULATION

// CALLING THE ENTIRE DATASET
var tableData = data;
var tbody = d3.select("tbody");

// DISPLAYING THE DATASET ON THE HTML APPLICATION
function displayData(){
	data.forEach(function(sightings) {
	
		var row = tbody.append("tr");
		Object.entries(sightings).forEach(function([key, value]) {
		
			var cell = row.append("td");
			cell.text(value);
		});
	});
};
displayData(data);

// SELECT THE BUTTON AND USER INPUT
var button = d3.select("#filter-btn");
var inputValue = d3.select("#datetime").property("value");

function buttonClick() {
	// PREVENT PAGE REFRESH
	d3.event.preventDefault();
	// DISPLAY THE INPUT
	console.log(inputValue);
	// FILTER OUT THE DATA
	var filteredData = tableData.filter(alien => alien.datetime === inputValue);
	// DISPLAY THE NEW DATASET
	displayData(filteredData);
};
inputValue.on("change", buttonClick);


