Template.report.helpers({
	company: function () {
		return Company.findOne({companyname: Meteor.user().profile.company});		
		},
		carCount: function () {
			var date = moment();
			var startTime = moment(date).format('YYYY-MM-01');
			var finishTime = moment(date).format('YYYY-MM-30');
			return CarsHistory.find({"timestamp": {"$gte": startTime, "$lt": finishTime}}).count();
		},
		taskCount: function () {
			var date = moment();
			var startTime = moment(date).format('YYYY-MM-01');
			var finishTime = moment(date).format('YYYY-MM-30');
			return TaskHistory.find({"timestamp": {"$gte": startTime, "$lt": finishTime}}).count();
		},
		shuttleCount: function () {
			var date = moment();
			var startTime = moment(date).format('YYYY-MM-01');
			var finishTime = moment(date).format('YYYY-MM-30');
			return ShuttleHistory.find({"timestamp": {"$gte": startTime, "$lt": finishTime}}).count();
		},
		avgCarTime: function () {
			var cars = new Array()
			var date = moment();
			var startTime = moment(date).format('YYYY-MM-01');
			var finishTime = moment(date).format('YYYY-MM-30');
			CarsHistory.find({"timestamp": {"$gte": startTime, "$lt": finishTime}}).forEach(
			function(myDoc) { 
				var timeCarBegin = moment(myDoc.timestamp);
				var timeCarEnd = moment(myDoc.completestamp);
				var timeDiff = moment.duration(timeCarEnd.diff(timeCarBegin));
				var timeDiffNum = Number(timeDiff.minutes());
				cars.push(timeDiffNum);	
			});
			
			var Sum = 0;
			for(var x = 0; x < cars.length; x ++)
			{
				Sum += cars[x]; 
			};
			average = Sum / cars.length; 
			return average;

		}
});

Template.report.events ({
    'click #btnLoad': function(event, template) {
      event.preventDefault();
      console.log("in btnLoad") 
      },
      'click #clear': function(event, template) {
      	  	var canvas = document.getElementById('myChart');
     			var context = canvas.getContext('2d');
      		context.clearRect(0, 0, canvas.width, canvas.height);
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

		var context = document.getElementById("myChart").getContext("2d");
		
		var porterName = this.toString().trim();
		var portIndex = labelsPorters.indexOf(this.toString()); 
      makeChart(data);
      makePieCharts(portIndex,porterName, data2);
      getPorterTime(porterName);
      },
        'focus #start': function (event) {
    // show datepicker
    $('#start').datepicker();  
  },
  'focus #finish': function (event) {
    // show datepicker
    $('#finish').datepicker();  
  },
  	  'click .submitrange': function(event, template) {
  	  	var startTime = moment(template.find("#start").value).format('YYYY-MM-DD');
		var finishTime = moment(template.find("#finish").value).format('YYYY-MM-DD');
  
    var myQuery = {
    selector: {"timestamp": {"$gte": startTime, "$lt": finishTime}},
    options: {limit: 999,skip: 0}
    };
  CarHistoryFilter.query.set(myQuery);
  	}
});

  Template.report.rendered = function() {

 $( "#start" ).datepicker({
defaultDate: "+1w",
changeMonth: true,
numberOfMonths: 3,
onClose: function( selectedDate ) {
$( "#finish" ).datepicker( "option", "minDate", selectedDate );
}
});
$( "#finish" ).datepicker({
defaultDate: "+1w",
changeMonth: true,
numberOfMonths: 3,
onClose: function( selectedDate ) {
$( "#start" ).datepicker( "option", "maxDate", selectedDate );
}
});
}
/*Template.report.created = function () {
	console.log("created");
	$( "#btnLoad" ).click();
	};
Template.report.rendered = function() {
	console.log("rendered");
	$( "#btnLoad" ).click();
};

Deps.autorun(function () {

});*/
function getPorterTime(porterName) {
			var cars = new Array()
			CarsHistory.find({'porter':{'$regex': porterName}}).forEach(
			function(myDoc) { 
				var timeCarBegin = moment(myDoc.timestamp);
				var timeCarEnd = moment(myDoc.completestamp);
				var timeDiff = moment.duration(timeCarEnd.diff(timeCarBegin));
				var timeDiffNum = Number(timeDiff.minutes());
				cars.push(timeDiffNum);	
			});
			
			var Sum = 0;
			for(var x = 0; x < cars.length; x ++)
			{
				Sum += cars[x]; 
			};
			average = Sum / cars.length; 

			$('#porterTime').text("Average Time for " + average);
	};
	
function makeChart(data) {  
	var ctx = document.getElementById("myChart").getContext("2d");
	ctx.canvas.width = 800;
	ctx.canvas.height = 300;
	var myNewChart = new Chart(ctx).Line(data,null);
}

function makePieCharts(porterIndex, portName, data) {  
		$('#porterName').text("Details for " + portName);
		var ctx2 = document.getElementById("myPieChart").getContext("2d");
		ctx2.canvas.width = 300;
		ctx2.canvas.height = 150;
		var myPieChart = new Chart(ctx2).Pie(data[porterIndex],null);

      var ctx3 = document.getElementById("myDoughnutChart").getContext("2d");
      ctx3.canvas.width = 300;
		ctx3.canvas.height = 150;	
      var myDoughnutChart = new Chart(ctx3).Doughnut(data[porterIndex],null);

}    

