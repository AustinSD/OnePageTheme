Template.report.helpers({
	company: function () {
		return Company.findOne({companyname: Meteor.user().profile.company});		
		},
});

Template.report.events ({
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
	
Template.report.rendered = function() {

//Get the context of the canvas element we want to select

};

function makeChart(data) {  
var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(data,null);
}

function makePieCharts(porterIndex, portName, data) {  

		$('#porterName').text(portName);
		var ctx2 = document.getElementById("myPieChart").getContext("2d");
		var myPieChart = new Chart(ctx2).Pie(data[porterIndex],null);

      var ctx3 = document.getElementById("myDoughnutChart").getContext("2d");
      var myDoughnutChart = new Chart(ctx3).Doughnut(data[porterIndex],null);

}    

