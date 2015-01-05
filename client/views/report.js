Template.report.helpers({
	company: function () {
		return Company.findOne({companyname: Meteor.user().profile.company});		
		},
});

Template.report.rendered = function() {
//Get the context of the canvas element we want to select
var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(data,null);


var ctx2 = document.getElementById("myPieChart").getContext("2d");
var ctx3 = document.getElementById("myDoughnutChart").getContext("2d");
// For a pie chart
var myPieChart = new Chart(ctx2).Pie(data2,null);
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx3).Doughnut(data2,null);

}

      
var data = {
labels : ["January","February","March","April","May","June","July"],

datasets : [
{
fillColor : "rgba(220,220,220,0.5)",
strokeColor : "rgba(220,220,220,1)",
pointColor : "rgba(220,220,220,1)",
pointStrokeColor : "#fff",
data : [65,59,90,81,56,55,40]
},
{
fillColor : "rgba(151,187,205,0.5)",
strokeColor : "rgba(151,187,205,1)",
pointColor : "rgba(151,187,205,1)",
pointStrokeColor : "#fff",
data : [28,48,40,19,96,27,100]
}
]
}
var data2 = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]
