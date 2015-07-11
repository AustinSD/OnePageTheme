  Template.taskhistory.helpers({
    taskhistory: function() {
      return TaskHistory.find();
    },
  })

  
   Template.taskhistory.rendered = function() {
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
  Template.taskhistory.events({
 		'click .export': function (event) {
			exportTableToCSV.apply(this, [$('#taskhisttable'), 'export.csv']);
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
    };
  CarHistoryFilter.query.set(myQuery);
  	}
  });