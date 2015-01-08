Template.report.helpers({
	company: function () {
		return Company.findOne({companyname: Meteor.user().profile.company});		
		},
		carCount: function () {
			return CarsHistory.find().count();
		},
		taskCount: function () {
			return TaskHistory.find().count();
		},
		shuttleCount: function () {
			return ShuttleHistory.find().count();
		}
});

Template.report.events ({
    'click #btnLoad': function(event, template) {
      event.preventDefault();
      
      var labelsPorters = Company.findOne({companyname: Meteor.user().profile.company}).porters;
      var carNum = new Array();
      var taskNum = new Array();

      var data = {
			labels : labelsPorters,

			datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : carNum
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : taskNum
			}
			]
		};

      makeChart(data);      
      
      },
      	
    'click #btnPorter': function(event, template) {
      event.preventDefault();
      
      var labelsPorters = Company.findOne({companyname: Meteor.user().profile.company}).porters;
      var carNum = new Array();
      var taskNum = new Array();
		var data2 = new Array();
		
		for (i = 0; i < labelsPorters.length; i++) {
				var porterTrim = labelsPorters[i].trim();
      		carNum[i] = CarsHistory.find({'porter':{'$regex': porterTrim}}).count();
      		taskNum[i] = TaskHistory.find({'porter':{'$regex': porterTrim}}).count();
      		
      		data2[i] = [
   			{
        			value: taskNum[i],
        			color:"#F7464A",
        			highlight: "#FF5A5E",
        			label: "Tasks"
    			},
    			{
        			value: carNum[i],
        			color: "#46BFBD",
        			highlight: "#5AD3D1",
        			label: "Cars"
    			},
    			{
        			value: 1,
        			color: "#FDB45C",
        			highlight: "#FFC870",
        			label: "Other"
    			}
				];
		}

      var data = {
			labels : labelsPorters,

			datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : carNum
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : taskNum
			}
			]
		};
		
		var porterName = this.toString().trim();
		var portIndex = labelsPorters.indexOf(this.toString()); 
      makeChart(data);
      makePieCharts(portIndex,porterName, data2);
      },
});

/*Template.report.created = function () {
	console.log("created");
	$( "#btnLoad" ).click();
	};
Template.report.rendered = function() {
	console.log("rendered");
	$( "#btnLoad" ).click();
};

Deps.autorun(function () {
	var user = Deps.nonreactive(function () { return Meteor.user(); });
	console.log(user);
	makeChart2();
});*/

function makeChart(data) {  
var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(data,null);
}

function makeChart2() {  
      var labelsPorters = Company.findOne({companyname: Meteor.user().profile.company}).porters;
      var carNum = new Array();
      var taskNum = new Array();

      var data = {
			labels : labelsPorters,

			datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : carNum
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : taskNum
			}
			]
		};
		
var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(data,null);
}

function makePieCharts(porterIndex, portName, data) {  

		$('#porterName').text("Details for " + portName);
		var ctx2 = document.getElementById("myPieChart").getContext("2d");
		var myPieChart = new Chart(ctx2).Pie(data[porterIndex],null);

      var ctx3 = document.getElementById("myDoughnutChart").getContext("2d");
      var myDoughnutChart = new Chart(ctx3).Doughnut(data[porterIndex],null);

}    

